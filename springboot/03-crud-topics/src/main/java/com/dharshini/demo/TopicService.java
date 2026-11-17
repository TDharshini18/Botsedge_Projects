package com.dharshini.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TopicService {

    @Autowired
    TopicRepository topicRepository;
    public List<Topic> getAllTopics(){


        return topicRepository.findAll();
    }

    public Topic getTopic(String id){

       return topicRepository.findById(id).orElse(null);
    }

    public void addTopic(Topic topic){
        topicRepository.save(topic);
    }

    public void updateTopic(Topic topic){
       topicRepository.save(topic);
    }

    public void deleteTopic(String id){
        topicRepository.deleteById(id);

    }




}