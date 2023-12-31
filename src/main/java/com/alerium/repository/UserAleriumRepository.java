package com.alerium.repository;

import com.alerium.domain.UserAlerium;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAleriumRepository extends JpaRepository<UserAlerium, Long> {
    List<UserAlerium> findByIsResident(Boolean isResident);

    UserAlerium findByEmail(String email);
}
