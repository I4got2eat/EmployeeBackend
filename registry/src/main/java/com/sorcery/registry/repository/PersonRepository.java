package com.sorcery.registry.repository;

import com.sorcery.registry.model.Person;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PersonRepository{
    @Insert(" INSERT INTO people (id, name, email, number) VALUES (#{person.id}, #{person.name}, #{person.email}, #{person.number})")
    void insertPerson(@Param("person") Person person );

    @Select("SELECT * FROM people")
    List<Person> getPeople();

    @Delete("DELETE FROM people")
    void deleteAllPeople();




}
