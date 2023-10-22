package com.alerium.domain;

import jakarta.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity(name = "Room")
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "room_number")
    private Long roomNumber;

    @OneToOne(mappedBy = "room")
    private UserAlerium userAlerium;

    @JoinColumn(name = "booked")
    private Boolean booked;

    @JoinColumn(name = "start_date")
    private Date startDate;

    @JoinColumn(name = "end_date")
    private Date endDate;

    @OneToMany
    @JoinColumn(name = "room_id")
    private List<Image> images;

    @Column(name = "typology")
    private String typology;

    @Column(name = "ammountPeople")
    private Long ammountPeople;

    @Column(name = "squareMeters")
    private Double squareMeters;

    @ManyToOne
    @JoinColumn(name = "floor_id")
    private Floor floor;

    public Room() {}

    public Room(
        Long id,
        Long roomNumber,
        UserAlerium userAlerium,
        Boolean booked,
        Date startDate,
        Date endDate,
        List<Image> images,
        String typology,
        Long ammountPeople,
        Double squareMeters,
        Floor floor
    ) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.userAlerium = userAlerium;
        this.booked = booked;
        this.startDate = startDate;
        this.endDate = endDate;
        this.images = images;
        this.typology = typology;
        this.ammountPeople = ammountPeople;
        this.squareMeters = squareMeters;
        this.floor = floor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Long roomNumber) {
        this.roomNumber = roomNumber;
    }

    public UserAlerium getUserAlerium() {
        return userAlerium;
    }

    public void setUserAlerium(UserAlerium userAlerium) {
        this.userAlerium = userAlerium;
    }

    public Boolean getBooked() {
        return booked;
    }

    public void setBooked(Boolean booked) {
        this.booked = booked;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public String getTypology() {
        return typology;
    }

    public void setTypology(String typology) {
        this.typology = typology;
    }

    public Long getAmmountPeople() {
        return ammountPeople;
    }

    public void setAmmountPeople(Long ammountPeople) {
        this.ammountPeople = ammountPeople;
    }

    public Double getSquareMeters() {
        return squareMeters;
    }

    public void setSquareMeters(Double squareMeters) {
        this.squareMeters = squareMeters;
    }

    public Floor getFloor() {
        return floor;
    }

    public void setFloor(Floor floor) {
        this.floor = floor;
    }
}
