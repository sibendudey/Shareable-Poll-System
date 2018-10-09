package com.sibendu.votingsystem.pojos;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Option {
    @Id @GeneratedValue
    long id;
    String description;
//    @ManyToOne
//    @JoinColumn(name = "POLL_ID")
    long yes;
    long no;
}
