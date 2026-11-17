package com.example.demo;

import com.example.demo.Exception.ExceptionEntity;
import com.example.demo.Exception.ExecptionLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceTest {

    @Autowired
    RepositoryTest RepositoryAccessVariable;

    public List<Strucutre> GetAllValues() {
        return RepositoryAccessVariable.findAll();
    }


    public void InsertValue(Strucutre currStrucutre) {
        RepositoryAccessVariable.save(currStrucutre);
    }

    public void UpdateValues(Strucutre updateStruct) {
        RepositoryAccessVariable.save(updateStruct);
    }

    public String DeleteValue(String id) {
        Optional<Strucutre> var=RepositoryAccessVariable.findById(id);
        if (var.isPresent()){
            RepositoryAccessVariable.deleteById(id);
            return "Value Deleted";
        }
        else{
            return "Record Doesn't Exist";
        }





    }

    public String DuplicatePost(Strucutre DupStrucutre) {
        String currname= DupStrucutre.getName();
        int check = 0;

        List<Strucutre> Vals = RepositoryAccessVariable.findAll();

        for (int i = 0; i < Vals.size(); i++) {
            if (Vals.get(i).getName().equals(currname)) {
                check = 1;
                return "Value Already Exist";
            }
        }
        if (check == 1) {
            return "Value Already Exist";

        } else {
            RepositoryAccessVariable.save(DupStrucutre);
            return "Value Added To Database";
        }


    }



    public Strucutre NameGetValues(String name1) {
//        List<Strucutre> search=RepositoryAccessVariable.findAll();
//
//        for(int i=0;i<search.size();i++){
//            if(search.get(i).getName().equals(name1)){
//                return search.get(i);
//            }
//
//        }
//        return new Strucutre();
        if(RepositoryAccessVariable.findByname(name1).isEmpty()){
            throw new ExecptionLogic("NOT FOUND");

        }
        return RepositoryAccessVariable.findByname(name1).get();

}



    }

