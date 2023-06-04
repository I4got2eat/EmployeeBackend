package com.sorcery.registry.controller;

import com.sorcery.registry.exception.ApiRequestException;
import com.sorcery.registry.model.Person;
import com.sorcery.registry.repository.PersonRepository;
import com.sorcery.registry.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("employees")
public class PersonController {

    public final PersonService personService;
    public final PersonRepository repo;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void addPeople (@RequestBody Person person){
        if(person.getEmail().contains("@") && person.getNumber().matches("^[0-9]*$") && !person.getName().isEmpty() )  {
            personService.addPerson(person);
        }else{
            throw new ApiRequestException("Invalid data");
        }
    }

    @GetMapping()
    public List<Person> getPeople (){
        return personService.getPeople();
    }

    @DeleteMapping()
    public void deletePeople(){
        personService.deletePeople();
    }



}
