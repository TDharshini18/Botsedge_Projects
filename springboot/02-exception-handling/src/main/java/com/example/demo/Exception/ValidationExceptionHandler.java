package com.example.demo.Exception;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
public class ValidationExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<Object> notValid(MethodArgumentNotValidException ex, HttpServletRequest request){
        Map<String, List<String>> errors= new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->{
            String fieldname=error.getField();
            String errormessage=error.getDefaultMessage();

            errors.computeIfAbsent(fieldname ,key->new ArrayList<>()).add(errormessage);

        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
    }



