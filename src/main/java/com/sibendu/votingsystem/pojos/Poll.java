package com.sibendu.votingsystem.pojos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Poll {
    @Size(min = 1, max = 4)
    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "POLL_ID")
    List<Option> options;
    @Id @GeneratedValue
    Long id;

    @JsonProperty
    public List<Option> getOptions()    {
        return options;
    }
}
