package com.example.backend.service;

import com.example.backend.model.Card;
import com.example.backend.repos.CardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {
    private final CardRepo cardRepo;

    @Autowired
    public CardService(CardRepo cardRepo){
        this.cardRepo = cardRepo;
    }

    public void addCard(Card card) {
        cardRepo.save(card);
    }
}
