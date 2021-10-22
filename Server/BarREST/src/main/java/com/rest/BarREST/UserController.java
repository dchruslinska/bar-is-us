package com.rest.BarREST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {       //REST Controller

    @Autowired
    private UserService service;


    @GetMapping("/users") //listing all users
    public List<User> list() {
        return service.listAll();
    }


    @GetMapping("/users/{id}") //finding user by id
    public ResponseEntity<User> get(@PathVariable int id) {
        try {
            User user = service.get(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND); //such id not found error
        }
    }


    @GetMapping("/verification") //veryfing user by login and password
    public Object get(@RequestBody User user) {
        if(service.verifyUser(user.getLogin(), user.getPasswrd()) == null)
        {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND); // such user not found error
        }
        else
        {
            User existingUser = service.verifyUser(user.getLogin(), user.getPasswrd());
            return new ResponseEntity<User>(existingUser, HttpStatus.OK); //such user exists
        }
    }


    @PostMapping("/registration") //adding new user
    public Object add(@RequestBody User user) {
        if(service.checkEmail(user.getEmail()) == null)
        {
            if(service.checkLogin(user.getLogin()) == null)
            {
                service.save(user);
                user.setId(user.getId());
                return new ResponseEntity<User>(HttpStatus.CREATED);
            } else
            {
                return new ResponseEntity<User>(HttpStatus.CONFLICT); //login already exists error
            }

        } else {
            return new ResponseEntity<User>(HttpStatus.CONFLICT); //email already exists error
        }
    }


    @PutMapping("/users/{id}") //updating record by id
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable int id) {
        try {
            User existUser = service.get(id);
            service.save(user);

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); //such id not found error
        }
    }

    @DeleteMapping("/users/{id}") //deleting user by id
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
}
