package com.alerium.web.rest;

import com.alerium.domain.Floor;
import com.alerium.repository.FloorRepository;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/floor")
public class FloorResource {

    private final FloorRepository floorRepository;

    public FloorResource(FloorRepository floorRepository) {
        this.floorRepository = floorRepository;
    }

    @GetMapping
    public List<Floor> getAllFloors() {
        return floorRepository.findAll();
    }
}
