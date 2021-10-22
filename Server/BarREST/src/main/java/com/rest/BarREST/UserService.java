package com.rest.BarREST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> listAll() {
        return repo.findAll();
    }

    public void save(User user){
        repo.save(user);
    }

    public User get(int ID) {
        return repo.findById(ID).get();
    }

    public User checkEmail(String email) {
        return repo.findByEmail(email);
    }

    public User checkLogin(String login) {
        return repo.findByLogin(login);
    }

    public User verifyUser(String login, String passwrd) {
        return repo.findUserByLoginAndPasswrd(login, passwrd);
    }

    public void delete(int ID) {
        repo.deleteById(ID);
    }

}