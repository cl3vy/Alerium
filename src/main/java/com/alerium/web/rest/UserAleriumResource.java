package com.alerium.web.rest;

import com.alerium.domain.Building;
import com.alerium.domain.Room;
import com.alerium.domain.UserAlerium;
import com.alerium.domain.dto.LoginDTO;
import com.alerium.repository.BuildingRepository;
import com.alerium.repository.FloorRepository;
import com.alerium.repository.RoomRepository;
import com.alerium.repository.UserAleriumRepository;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/user-alerium")
public class UserAleriumResource {

    private final UserAleriumRepository userAleriumRepository;

    private final RoomRepository roomRepository;

    private final FloorRepository floorRepository;

    private final BuildingRepository buildingRepository;

    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserAleriumResource(
        UserAleriumRepository userAleriumRepository,
        RoomRepository roomRepository,
        BuildingRepository buildingRepository,
        FloorRepository floorRepository
    ) {
        this.userAleriumRepository = userAleriumRepository;
        this.roomRepository = roomRepository;
        this.buildingRepository = buildingRepository;
        this.floorRepository = floorRepository;
    }

    @GetMapping
    public List<UserAlerium> getAllUserAlerium() {
        return userAleriumRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<UserAlerium> createUserAlerium(@RequestBody UserAlerium userAlerium) {
        userAlerium.setActive(true);
        userAlerium.setResident(false);
        userAlerium.setHashPassword(hashPassword(userAlerium.getHashPassword()));
        userAlerium.setDeleted(false);
        userAlerium.setRole("user");

        var savedUserAlerium = userAleriumRepository.save(userAlerium);

        List<Building> buildings = buildingRepository.findAll();

        for (Building b : buildings) {
            var floors = b.getFloors();

            for (int i = 1; i < floors.size() + 1; i++) {
                for (int j = 1; j < 21; j++) {
                    Room room = new Room();

                    room.setBooked(false);
                    room.setRoomNumber((long) (j + 100 * i));

                    Random random = new Random();
                    int ra = random.nextInt(4) + 1;

                    room.setAmmountPeople((long) ra);

                    if (room.getAmmountPeople() == 1) {
                        room.setTypology("Single");
                    } else if (room.getAmmountPeople() == 2) {
                        room.setTypology("Double");
                    } else if (room.getAmmountPeople() == 3) {
                        room.setTypology("1 + 1");
                    } else if (room.getAmmountPeople() == 4) {
                        room.setTypology("2 + 1");
                    }

                    int squareMeters = random.nextInt(61) + 30; // Range: 30 to 90

                    room.setSquareMeters((double) squareMeters);

                    room.setFloor(floors.get(i - 1));

                    roomRepository.save(room);
                }
            }
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUserAlerium);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<UserAlerium> authenticate(@RequestBody LoginDTO loginDTO) {
        // Check if a user with the provided email exists
        UserAlerium userAlerium = userAleriumRepository.findByEmail(loginDTO.getEmail());

        if (userAlerium != null) {
            String storedHashedPassword = userAlerium.getHashPassword();
            String providedPassword = loginDTO.getPassword();

            // Use the checkPassword method to compare passwords
            if (checkPassword(providedPassword, storedHashedPassword)) {
                // Authentication successful
                return ResponseEntity.ok(userAlerium);
            }
        }

        // Authentication failed
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/residents")
    public List<UserAlerium> getAllResidents() {
        return userAleriumRepository.findByIsResident(true);
    }

    @PatchMapping("/{id}/change-activity")
    public ResponseEntity<?> changeUserAleriumActivity(@PathVariable Long id, @RequestParam Boolean newActivityStatus) {
        Optional<UserAlerium> userAleriumOptional = userAleriumRepository.findById(id);

        if (userAleriumOptional.isPresent()) {
            UserAlerium userAlerium = userAleriumOptional.orElseThrow();
            userAlerium.setActive(newActivityStatus);
            userAleriumRepository.save(userAlerium);
            return ResponseEntity.ok("Activity status changed successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}/change-residency")
    public ResponseEntity<?> changeUserAleriumResidency(@PathVariable Long id, @RequestParam Boolean newResidencyStatus) {
        Optional<UserAlerium> userAleriumOptional = userAleriumRepository.findById(id);

        if (userAleriumOptional.isPresent()) {
            UserAlerium userAlerium = userAleriumOptional.orElseThrow();
            userAlerium.setResident(newResidencyStatus);
            userAleriumRepository.save(userAlerium);
            return ResponseEntity.ok("Residency status changed successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/upload-contract")
    public void uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("userId") Long userId) throws IOException {
        var user = userAleriumRepository.findById(userId);

        if (user.isPresent()) {
            UserAlerium foundUser = user.get();

            try {
                foundUser.setContractBlob(file.getBytes()); // Set the contract data from the uploaded file
                // You may want to perform additional validation or processing here

                userAleriumRepository.save(foundUser); // Save the user with the attached contract
            } catch (IOException e) {
                // Handle any IO errors that may occur when reading the file
                // You can return an error response or log the error as needed
            }
        }
    }

    @GetMapping("/download-contract/{userId}")
    public ResponseEntity<byte[]> downloadContract(@PathVariable Long userId) {
        // Retrieve the user from the database
        var user = userAleriumRepository.findById(userId);

        if (user.isPresent()) {
            UserAlerium foundUser = user.get();

            // Check if the user has a contract
            if (foundUser.getContractBlob() != null) {
                // Prepare the response headers
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_PDF);

                String contractName = foundUser.getName() + "Contract.pdf";

                headers.setContentDispositionFormData("attachment", contractName);

                // Return the contract data as a downloadable file
                return ResponseEntity.ok().headers(headers).body(foundUser.getContractBlob());
            }
        }

        // Handle the case when the user or contract is not found
        // You can return an error response or log the error as needed
        return ResponseEntity.notFound().build();
    }

    public static String hashPassword(String plainPassword) {
        return passwordEncoder.encode(plainPassword);
    }

    public static boolean checkPassword(String plainPassword, String hashedPassword) {
        return passwordEncoder.matches(plainPassword, hashedPassword);
    }
}
