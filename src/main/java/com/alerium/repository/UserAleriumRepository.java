package com.alerium.repository;

import com.alerium.domain.UserAlerium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAleriumRepository extends JpaRepository<UserAlerium, Long> {}
