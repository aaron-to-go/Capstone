package com.example.backend.repos;

import com.example.backend.model.Card;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CardRepo extends PagingAndSortingRepository<Card, String> {
}
