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

    public Room() {}

    public Room(Long id, Long roomNumber, UserAlerium userAlerium, Boolean booked, Date startDate, Date endDate, List<Image> images) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.userAlerium = userAlerium;
        this.booked = booked;
        this.startDate = startDate;
        this.endDate = endDate;
        this.images = images;
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
}
