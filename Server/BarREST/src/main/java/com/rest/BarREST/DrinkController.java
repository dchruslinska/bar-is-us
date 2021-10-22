package com.rest.BarREST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DrinkController {

    @Autowired
    private DrinkService service;

    @RequestMapping("/")
    public List<Drink> viewHomePage(Model model, @Param("keyword") String keyword) { //filtering drinks by vol (keyword)
        List<Drink> listDrinks = service.listAll(keyword);
       model.addAttribute("listDrinks", listDrinks);
       model.addAttribute("keyword", keyword);

        return listDrinks;
    }

    @GetMapping("/drinks") //listing all drinks
    public List<Drink> list() {
        return service.listAll();
    }


    @GetMapping("/drinks/{id}") //finding drink by id
    public ResponseEntity<Drink> get(@PathVariable Integer id) {
        try {
            Drink drink = service.get(id);
            return new ResponseEntity<Drink>(drink, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Drink>(HttpStatus.NOT_FOUND); //such id not found error
        }
    }

    @PostMapping("/drinks") //adding new drink
    public void add(@RequestBody Drink drink) {
        service.save(drink);
    }

    @PutMapping("/drinks/{id}") //updating record by id
    public ResponseEntity<?> update(@RequestBody Drink drink, @PathVariable Integer id) {
        try {
            Drink existDrink = service.get(id);
            service.save(drink);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); //such id not found error
        }
    }

    @DeleteMapping("/drinks/{id}") //deleting drink by id
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}
