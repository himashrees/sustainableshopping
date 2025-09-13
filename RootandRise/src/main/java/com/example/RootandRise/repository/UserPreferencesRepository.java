package com.example.RootandRise.repository;


import com.example.RootandRise.*;
import com.example.RootandRise.model.UserPreferences;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences, Long> {
}

