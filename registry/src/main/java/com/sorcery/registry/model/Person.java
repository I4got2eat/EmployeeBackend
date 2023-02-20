package com.sorcery.registry.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Data
@SuperBuilder(toBuilder = true)
public class Person {
    private UUID id;

    private String name;

    private String email;
    private String number;
}

