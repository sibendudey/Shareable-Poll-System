package com.sibendu.votingsystem.pojos;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Option {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String description;
    long yes;
    long no;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "poll_id", nullable = false)
    Poll poll;
}
