package com.example.mycode;

public class StudentAlreadyExistsException extends RuntimeException{

    public StudentAlreadyExistsException(String message){
        super(message);
    }

}
