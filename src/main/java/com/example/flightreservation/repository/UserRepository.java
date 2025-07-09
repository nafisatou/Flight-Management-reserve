package com.example.flightreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.flightreservation.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Optionally: add custom queries here
}
