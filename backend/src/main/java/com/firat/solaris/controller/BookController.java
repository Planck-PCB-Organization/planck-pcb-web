package com.firat.solaris.controller;


import com.firat.solaris.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import java.util.Arrays;
import java.util.List;

@RestController
public class BookController {

//    @Autowired
//    private EmailSender emailSender;

    @CrossOrigin(origins = "https://localhost:3000")
    @GetMapping("/books")
    public List<Book> getBooks() throws MessagingException {
        EmailSender emailSender = new EmailSender();
        emailSender.sendEmail();

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