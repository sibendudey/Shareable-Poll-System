package com.sibendu.votingsystem.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Poll {
    @Size(min = 1, max = 4)
    @OneToMany(cascade = CascadeType.ALL,
    fetch = FetchType.EAGER,
    mappedBy = "poll")
    List<Option> options;
    String question;
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Override
    public String toString() {
        return super.toString();
    }
}
