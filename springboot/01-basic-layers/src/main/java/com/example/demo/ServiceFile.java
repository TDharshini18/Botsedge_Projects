package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceFile {


    @Autowired
    RepositoryFile RepositoryAccessVariable;


    public List<DataStructureFile> AllValues(){
        List<DataStructureFile> Values=RepositoryAccessVariable.findAll();
        return Values;


    }

    public Optional<DataStructureFile> SpecifiedValues(String data){
        return RepositoryAccessVariable.findById(data);

    };


    public void AddValues(DataStructureFile currval){
            RepositoryAccessVariable.save(currval);
        };


    public void UpdateValues(DataStructureFile upvariable){
        RepositoryAccessVariable.save(upvariable);
    };

    public void DeleteValues( String data1){
        RepositoryAccessVariable.deleteById(data1);
    }


    }

