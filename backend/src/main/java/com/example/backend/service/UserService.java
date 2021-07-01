package com.example.backend.service;

import com.example.backend.dto.GoogleAccessTokenDTO;
import com.example.backend.dto.GoogleUserDTO;
import com.example.backend.model.User;
import com.example.backend.repos.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User loginWithGoogleProfile(GoogleUserDTO googleUserDTO, GoogleAccessTokenDTO googleAccessTokenDTO) {

        if (userRepo.existsUserById(googleUserDTO.getId())) {
            return userRepo.findUserById(googleUserDTO.getId());
        } else {


            User user = User.builder()
                    .id(googleUserDTO.getId())
                    .fullName(googleUserDTO.getName())
                    .firstName(googleUserDTO.getGiven_name())
                    .lastName(googleUserDTO.getFamily_name())
                    .build();

            return userRepo.save(user);
        }

    }
}
