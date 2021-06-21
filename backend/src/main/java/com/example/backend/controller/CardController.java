package com.example.backend.controller;

import com.example.backend.model.Card;
import com.example.backend.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("cards")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public String addCard(@RequestBody Card card) {
        cardService.addCard(card);
        return "worked";
    }

    @GetMapping
    public String test(){
        return "test Get works";
    }

}
