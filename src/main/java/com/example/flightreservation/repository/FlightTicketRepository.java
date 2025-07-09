package com.example.flightreservation.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.flightreservation.entity.FlightTicket;

public interface FlightTicketRepository extends JpaRepository<FlightTicket, Long> {

    // This one for when date is present
    List<FlightTicket> findByBookingDateOrDestinationAddressContainingOrKickoffAddressContaining(
        LocalDate bookingDate, String destinationAddress, String kickoffAddress
    );

    // This one for when date is null
    List<FlightTicket> findByDestinationAddressContainingOrKickoffAddressContaining(
        String destinationAddress, String kickoffAddress
    );

}
