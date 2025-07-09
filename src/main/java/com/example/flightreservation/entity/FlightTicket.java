package com.example.flightreservation.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class FlightTicket {

    @Id
    @GeneratedValue
    private Long id;

    private LocalDate bookingDate;
    private String destinationAddress;
    private String kickoffAddress;

    @ManyToOne
    private User user;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getDestinationAddress() {
        return destinationAddress;
    }

    public void setDestinationAddress(String destinationAddress) {
        this.destinationAddress = destinationAddress;
    }

    public String getKickoffAddress() {
        return kickoffAddress;
    }

    public void setKickoffAddress(String kickoffAddress) {
        this.kickoffAddress = kickoffAddress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
