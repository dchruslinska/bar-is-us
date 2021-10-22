package com.rest.BarREST;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Drink {

    private Integer id;
    private String name;
    private Integer price;
    private String description;
    private String ingredients;
    private String vol;
    private String img;
    private String description_extended;


    public Drink() {

    }

    public Drink(Integer id, String name, Integer price, String description, String ingredients, String vol, String img, String description_extended) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.ingredients = ingredients;
        this.vol = vol;
        this.img = img;
        this.description_extended = description_extended;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getVol() {
        return vol;
    }

    public void setVol(String vol) {
        this.vol = vol;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription_extended() {
        return description_extended;
    }

    public void setDescription_extended(String description_extended) {
        this.description_extended = description_extended;
    }
}
