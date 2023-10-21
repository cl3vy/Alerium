package com.alerium.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Request extends JpaRepository<Request, Long> {}
