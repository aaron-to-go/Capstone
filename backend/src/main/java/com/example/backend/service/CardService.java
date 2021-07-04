package com.example.backend.service;

import com.example.backend.dto.CardDTO;
import com.example.backend.model.*;
import com.example.backend.repos.CardRepo;
import com.example.backend.utils.IDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Service
public class CardService {
    private final CardRepo cardRepo;
    private final IDGenerator idGenerator;

    @Autowired
    public CardService(CardRepo cardRepo, IDGenerator idGenerator){
        this.cardRepo = cardRepo;
        this.idGenerator = idGenerator;
    }

    public void addCard(Principal principal, CardDTO cardDTO) {

        String newId = idGenerator.generateID();

        List<StageHistory> history = List.of(new StageHistory(Stage.NEW, principal.getName(), LocalDateTime.now()));
        Set<String> votes = Set.of();
        List<Comment> comments = List.of();
        Set<String> tags = Set.of();

        Card newCard = Card.builder()
                .id(newId)
                .title(cardDTO.getTitle())
                .description(cardDTO.getDescription())
                .datetime(LocalDateTime.now())
                .user_id(principal.getName())
                .stage(Stage.NEW)
                .history(history)
                .votes(votes)
                .comments(comments)
                .department(cardDTO.getDepartment())
                .tags(tags)
                .build();

        cardRepo.save(newCard);
    }

    public List<Card> listCards(){
        List<Card> response = cardRepo.findAll();
        System.out.println(response);
        return response;
    }
}
