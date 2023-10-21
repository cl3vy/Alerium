package com.alerium.web.rest;

import com.alerium.domain.Building;
import com.alerium.domain.Floor;
import com.alerium.repository.BuildingRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/building")
public class BuildingResource {

    private final BuildingRepository buildingRepository;

    public BuildingResource(BuildingRepository buildingRepository) {
        this.buildingRepository = buildingRepository;
    }

    @GetMapping("/{id}")
    public Building getBuildingById(@PathVariable Long id) {
        return buildingRepository.getReferenceById(id);
    }

    @GetMapping("/floors/{id}")
    public List<Floor> getFloorsOfBuilding(@PathVariable Long id) {
        var building = buildingRepository.getReferenceById(id);

        return building.getFloors();
    }
}
