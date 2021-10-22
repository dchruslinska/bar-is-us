package com.rest.BarREST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrinkService {

    @Autowired
    private DrinkRepository repos;

    public List<Drink> listAll(String keyword) {
        if(keyword != null) {
            return repos.search(keyword);
        }
        return repos.findAll();
    }

    public List<Drink> listAll() {
        return repos.findAll();
    }

    public void save(Drink drink){
        repos.save(drink);
    }

    public Drink get(Integer ID) {
        return repos.findById(ID).get();
    }

    public void delete(Integer ID) {
        repos.deleteById(ID);
    }
}
