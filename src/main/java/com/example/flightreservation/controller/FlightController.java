package com.example.flightreservation.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.flightreservation.entity.FlightTicket;
import com.example.flightreservation.repository.FlightTicketRepository;

@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    private FlightTicketRepository flightRepo;

    @PostMapping("/book")
    public FlightTicket book( @RequestBody FlightTicket ticket) {
        return flightRepo.save(ticket);
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Flight Reservation Service is up and running!";
    }

    @GetMapping("/search")
    public List<FlightTicket> search(
        @RequestParam(required = false) String date,
        @RequestParam(required = false) String destination,
        @RequestParam(required = false) String kickoff
    ) {
        LocalDate bookingDate = (date != null && !date.isBlank()) ? LocalDate.parse(date) : null;
        String dest = destination != null ? destination : "";
        String kick = kickoff != null ? kickoff : "";

        if (bookingDate != null) {
            return flightRepo.findByBookingDateOrDestinationAddressContainingOrKickoffAddressContaining(
                bookingDate, dest, kick
            );
        } else {
            return flightRepo.findByDestinationAddressContainingOrKickoffAddressContaining(dest, kick);
        }
    }

    @GetMapping("/all")
    public List<FlightTicket> getAllTickets() {
        return flightRepo.findAll();
    }
}
