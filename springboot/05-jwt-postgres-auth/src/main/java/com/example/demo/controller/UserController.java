package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user/me")
    public ResponseEntity<?> userAccess() {
        return ResponseEntity.ok("Hello User - protected endpoint");
    }

    @GetMapping("/admin/secret")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> adminAccess() {
        return ResponseEntity.ok("Hello Admin - admin only content");
    }
}

