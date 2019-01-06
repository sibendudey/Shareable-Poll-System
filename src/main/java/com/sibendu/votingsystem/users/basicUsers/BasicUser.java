package com.sibendu.votingsystem.users.basicUsers;

import com.sibendu.votingsystem.users.User;

import javax.persistence.*;

@Entity
public class BasicUser implements User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "basic_user_generator")
    @SequenceGenerator(name = "basic_user_generator", sequenceName = "basic_user_seq")
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    @Override
    public String getFirstName() {
        return firstName;
    }

    @Override
    public String getLastName() {
        return lastName;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }
}
