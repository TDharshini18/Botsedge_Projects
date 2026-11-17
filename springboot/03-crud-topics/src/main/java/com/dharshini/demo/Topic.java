package com.dharshini.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity


public class Topic {
    @Id
    private String id;
    private String name;
    private String type;
    private int balance;


    public Topic(){};

    public Topic(String id,String name, String type, int balance ){
        this.id=id;
        this.name=name;
        this.type = type;
        this.balance=balance;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {this.name = name;}


    public void setBalance(int balance){this.balance=balance;}



    public int getBalance(){return this.balance;}

    public String getType() {return type;}

    public void setType(String type) {
        this.type = type;
    }

    public String getId() {return id;}

    public void setId(String id) {this.id = id;}}


