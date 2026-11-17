package com.example.Security;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @GetMapping
    public String greet(HttpServletRequest request){
        return "Pls work"+request.getSession().getId();

    }


}
