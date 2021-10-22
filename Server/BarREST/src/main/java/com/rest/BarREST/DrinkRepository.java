package com.rest.BarREST;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DrinkRepository extends JpaRepository<Drink, Integer> {

    @Query("SELECT d FROM Drink d WHERE CONCAT(d.vol, '') LIKE %?1%")
    List<Drink> search(String keyword);
}
