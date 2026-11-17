package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;

@Entity
public class Strucutre {
    @Id
    private String id;


    @NotBlank(message = "The Name Is Required")
    @Size(min=3,max=20, message="Size Is Is Not Valid")
    private String name;

    @NotNull(message="Age is Required")
    @Min(value=17, message="Age Must Be Greater than 18")
    private int age;



    @NotEmpty
    @Email(message="Email Format Is Not Valid")
    private String email;

    @NotNull(message="Password Is Required")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    message="Password Does Not Match The Required Criteria")
    private String password;

    Strucutre(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    Strucutre(String name, String id, int age,String email,String password){
        this.name=name;
        this.id=id;
        this.age=age;
        this.email=email;
        this.password=password;

    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = this.age;
    }

    public @NotEmpty @Email String getEmail() {
        return email;
    }

    public void setEmail(@NotEmpty @Email String email) {
        this.email = email;
    }
}
