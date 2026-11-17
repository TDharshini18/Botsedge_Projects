package com.example.demo;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ControllerTest {
    @Autowired
    ServiceTest ServiceAccessVariable;


    @RequestMapping(method= RequestMethod.GET,value="/endpointGet")
    public List<Strucutre> GetAllValues(){
        return ServiceAccessVariable.GetAllValues();
    }

    @RequestMapping(method=RequestMethod.POST,value="/endpointPost")
    public String InsertValues(@Valid @RequestBody Strucutre currStrucutre ){
        ServiceAccessVariable.InsertValue(currStrucutre);
        return "Value Added";
    }


    @RequestMapping(method=RequestMethod.PUT,value="/endpointPut/{id}")
    public String UpdateValues(@RequestBody Strucutre updateStruct){
        ServiceAccessVariable.UpdateValues(updateStruct);
        return "Values Updates";
    }

    @RequestMapping(method=RequestMethod.DELETE,value="/endpointDelete/{id}")
    public String DeleteValue(@PathVariable String id){
        return ServiceAccessVariable.DeleteValue(id);
    }


    @RequestMapping(method=RequestMethod.POST,value="/endpointPostDuplicate")
    public String DuplicatePost(@Valid @RequestBody Strucutre DupStrucutre){
        return ServiceAccessVariable.DuplicatePost(DupStrucutre);
    }

    @RequestMapping(method=RequestMethod.GET,value="/endpointGetByName/{name1}")
    public Strucutre NameGetValues(@PathVariable String name1){
        return ServiceAccessVariable.NameGetValues(name1);
    }



}

