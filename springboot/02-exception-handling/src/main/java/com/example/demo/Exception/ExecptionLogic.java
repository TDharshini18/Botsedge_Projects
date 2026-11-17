package com.example.demo.Exception;

public class ExecptionLogic extends RuntimeException {
    public ExecptionLogic(String message) {
        super(message);
    }

    public ExecptionLogic(String message, Throwable cause) {
        super(message, cause);
    }
}
