package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
public class ControllerFile {



    @Autowired
    ServiceFile ServiceAccessVariable;

    //each request get its own mapping
    //Get Every Data
    @RequestMapping(method= RequestMethod.GET, value="/endpoint")
    public List<DataStructureFile> AllValues(){
        return ServiceAccessVariable.AllValues();
    }


    //Get Specified Data
    @RequestMapping(method=RequestMethod.GET,value="/endpointSpecific/{data}")
    public Optional<DataStructureFile> SpecifiedValues(@PathVariable String data){
        return ServiceAccessVariable.SpecifiedValues(data);

    }




    @RequestMapping(method=RequestMethod.POST,value="/endpointPost")
    public String AddValues(@RequestBody DataStructureFile currval){
        ServiceAccessVariable.AddValues(currval);
        return "Valued Added";

    }

    @RequestMapping(method=RequestMethod.PUT,value="/endpointPUT/{data1}")
    public String UpdateValues(@RequestBody DataStructureFile upvariable){
        ServiceAccessVariable.UpdateValues(upvariable);
        return "Values Updated";
    }


    @RequestMapping(method=RequestMethod.DELETE,value="endpointDelete/{data1}")
    public String DeleteValues(@PathVariable String data){
        ServiceAccessVariable.DeleteValues(data);

    }


}
