package com.sorcery.registry.controller;

import com.sorcery.registry.exception.ApiRequestException;
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
        if(person.getEmail().contains("@") && person.getNumber().matches("^[0-9]*$") && !person.getName().isEmpty() )  {
            personService.addPerson(person);
        }else{
            throw new ApiRequestException("false value");
        }


    }

    @GetMapping(value = "/get")
    public List<Person> getPeople (){
        return personService.getPeople();
    }

    @DeleteMapping(value = "/delete")
    public void deletePeople(){
        personService.deletePeople();
    }


}
