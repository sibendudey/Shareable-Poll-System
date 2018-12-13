package com.sibendu.votingsystem.pojos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Option {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String description;
    private long voteCount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "poll_id", nullable = false)
    Poll poll;
    public Option() {

    }

    public void setPoll(Poll poll)  {
        this.poll = poll;
    }

    @JsonIgnore
    public Poll getPoll()   {
        return poll;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
