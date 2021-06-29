package com.example.backend.controller;

import com.example.backend.dto.CardDTO;
import com.example.backend.model.Card;
import com.example.backend.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public void addCard(@RequestBody CardDTO cardDTO) {
        cardService.addCard(cardDTO);
    }

    @GetMapping
    public List<Card> listCards() {
        return cardService.listCards();
    }
}
