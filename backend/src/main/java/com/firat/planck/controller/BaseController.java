package com.firat.planck.controller;


import com.firat.planck.Response;
import com.firat.planck.EmailSender;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class BaseController {


//    @GetMapping("/books")
    @RequestMapping(value = "/sendMail", method = RequestMethod.GET)
    public String sendMail() throws MessagingException {
        EmailSender emailSender = new EmailSender();
//        emailSender.sendEmail();
        return "Mail başarı";
//        return Arrays.asList(new Response(1, "Core Java"), new Response(2, "Effective Java"), new Response(3, "Head First Java"));
    }

    @PostMapping("/calculatePrice")
    public Response calculatePrice(HttpServletRequest request) throws MessagingException {
        String title = request.getParameter("BookData");
        EmailSender emailSender = new EmailSender();
//        emailSender.sendEmail();

        return new Response(1, "Core Java");
    }

}
