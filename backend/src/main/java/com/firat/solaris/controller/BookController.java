package com.firat.solaris.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class BookController {

    @CrossOrigin(origins = "https://siriuspcb.com:3000")
    @GetMapping("/books")
    public List<Book> getBooks() {
        return Arrays.asList(new Book(1, "Core Java"), new Book(2, "Effective Java"), new Book(3, "Head First Java"));
    }
}

class Book {
    private int id;
    private String bookName;

    public Book(int id, String bookName) {
        super();
        this.id = id;
        this.bookName = bookName;
    }

    public int getId() {
        return id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
}