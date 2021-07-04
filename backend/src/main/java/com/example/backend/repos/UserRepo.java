package com.example.backend.repos;

import com.example.backend.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends PagingAndSortingRepository<User, String> {

    boolean existsUserById(String id);

    User findUserById(String id);
}
