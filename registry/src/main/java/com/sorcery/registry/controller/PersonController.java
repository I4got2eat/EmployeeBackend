package com.sorcery.registry.controller;

import com.sorcery.registry.model.Person;
import com.sorcery.registry.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("database")
public class PersonController {

    public PersonService personService;

    @PostMapping(value = "/post")
    public void addPeople (@RequestBody Person person){
        personService.addPerson(person);
    }

    @GetMapping(value = "/get")
    public List<Person> getPeople (){
        return personService.getPeople();
    }

    @DeleteMapping(value = "/delete")
    public void deletePeople(){
        personService.deletePeople();
    }

//    @GetMapping(value = "/get
//")
//    public List<Person> getPeople(){
//        return personService.getPeople();
//    }
//
//    @DeleteMapping(value = "/delete")
//    public void deletePeople(){
//        personService.deletePeople();
//    }

}
