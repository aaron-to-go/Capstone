package com.example.backend.service;

import com.example.backend.model.Card;
import com.example.backend.repos.CardRepo;
import com.example.backend.utils.IDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailsService {
    private final CardRepo cardRepo;
    private final IDGenerator idGenerator;

    @Autowired
    public DetailsService(CardRepo cardRepo, IDGenerator idGenerator) {
        this.cardRepo = cardRepo;
        this.idGenerator = idGenerator;
    }

    public Card getCardDetails(String id) {
        return cardRepo.findCardById(id);
    }

}
