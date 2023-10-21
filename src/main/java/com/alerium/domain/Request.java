package com.alerium.domain;

import jakarta.persistence.*;
import java.sql.Date;

@Entity(name = "Request")
@Table(name = "request")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "status")
    private String string;

    @Column(name = "message")
    private String message;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "offer")
    private Long offer;

    public Request() {}

    public Request(Long id, String string, String message, Date startDate, Date endDate, Long offer) {
        this.id = id;
        this.string = string;
        this.message = message;
        this.startDate = startDate;
        this.endDate = endDate;
        this.offer = offer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
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

    public Long getOffer() {
        return offer;
    }

    public void setOffer(Long offer) {
        this.offer = offer;
    }
}
