package com.alerium.web.rest;

import com.alerium.repository.RequestRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/request")
public class RequestController {

    private final RequestRepository requestRepository;

    public RequestController(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }
}
