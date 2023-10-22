package com.alerium.domain;

import jakarta.persistence.*;
import java.util.List;

@Entity(name = "Floor")
@Table(name = "floor")
public class Floor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "floor_nr")
    private Long floorNr;

    @OneToMany(mappedBy = "floor")
    private List<Room> rooms;

    public Floor() {}

    public Floor(Long id, Long floorNr, List<Room> rooms) {
        this.id = id;
        this.floorNr = floorNr;
        this.rooms = rooms;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFloorNr() {
        return floorNr;
    }

    public void setFloorNr(Long floorNr) {
        this.floorNr = floorNr;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }
}
