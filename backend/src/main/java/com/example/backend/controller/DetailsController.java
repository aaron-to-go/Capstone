package com.example.backend.controller;

import com.example.backend.model.Card;
import com.example.backend.service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/card")
public class DetailsController {

    private final DetailsService detailsService;

    @Autowired
    public DetailsController(DetailsService detailsService) {
        this.detailsService = detailsService;
    }

    @GetMapping("/{id}")
    public Card getCardDetails(@PathVariable String id) {
        return detailsService.getCardDetails(id);
    }
}
