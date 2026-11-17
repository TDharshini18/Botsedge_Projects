package com.example.demo.Exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandle {

    @ExceptionHandler(value={ExecptionLogic.class})

    public ResponseEntity<Object> handleexception (ExecptionLogic exception){

        ExceptionEntity validationException = new ExceptionEntity(exception.getMessage(),exception.getCause(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(validationException,HttpStatus.NOT_FOUND);
    }
}
