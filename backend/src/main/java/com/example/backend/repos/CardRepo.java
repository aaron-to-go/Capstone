package com.example.backend.repos;

import com.example.backend.model.Card;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepo extends PagingAndSortingRepository<Card, String> {

    List<Card> findAll();

    Card findCardById(String id);

}
