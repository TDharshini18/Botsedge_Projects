package com.dharshini.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class TopicController {
    @Autowired
    TopicService topicService;
    @RequestMapping("/topics")
    public List<Topic> AllTopics(){
        return topicService.getAllTopics();

            }

    @RequestMapping("/topics/{id}")
    public Topic getTopic(@PathVariable String id) {
        return topicService.getTopic(id);
    }

    @RequestMapping(method= RequestMethod.POST,value="/topics")
    public String addTopic(@RequestBody Topic topic){
        topicService.addTopic(topic);
        return "Topic Added";

    }

    @RequestMapping(method=RequestMethod.PUT,value="topics/{id}")
    public String updateTopic(@RequestBody Topic topic){
        topicService.updateTopic(topic);
        return "Topic Updated";
    }

@RequestMapping(method=RequestMethod.DELETE,value="topics/{id}")
    public String deleteTopic(@PathVariable String id){
        topicService.deleteTopic(id);
        return "Topic Deleted";
    }




}

