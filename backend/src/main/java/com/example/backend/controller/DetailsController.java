package com.example.backend.controller;

import com.example.backend.model.Card;
import com.example.backend.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/card")
public class DetailsController {

    private final CardService cardService;

    @Autowired
    public DetailsController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/{id}")
    public Card getCardDetails(@PathVariable String id) {
        return cardService.getCardDetails(id);
    }
}
