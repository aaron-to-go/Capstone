package com.example.backend.controller;

import com.example.backend.dto.CardDTO;
import com.example.backend.dto.LikeDTO;
import com.example.backend.model.Card;
import com.example.backend.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public void addCard(Principal principal, @RequestBody CardDTO cardDTO) {
        cardService.addCard(principal, cardDTO);
    }

    @GetMapping
    public List<Card> listCards() {
        return cardService.listCards();
    }

    @PutMapping("/{id}")
    public void likeCard(@PathVariable String id){
        cardService.likeCard(id);
    }

    @GetMapping("/{id}")
    public LikeDTO getVotes(@PathVariable String id){
        return cardService.getVotes(id);
    }
}
