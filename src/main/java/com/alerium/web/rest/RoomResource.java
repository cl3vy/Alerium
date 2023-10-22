package com.alerium.web.rest;

import com.alerium.domain.Room;
import com.alerium.repository.RoomRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/room")
public class RoomResource {

    private final RoomRepository roomRepository;

    public RoomResource(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @GetMapping("/floor/{id}")
    public List<Room> getRoomsByFloor(@PathVariable Long id) {
        return roomRepository.findByFloorId(id);
    }
}
