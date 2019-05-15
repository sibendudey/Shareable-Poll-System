package com.sibendu.votingsystem.pojos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Data
public class Poll {
    @Size(min = 1, max = 4)
    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            mappedBy = "poll")
    private List<PollOption> pollOptions;
    private String question;
    private boolean ipRestricted;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Override
    public String toString() {
        return super.toString();
    }

    @JsonProperty("percentage")
    public List<Double> percentage() {
        if (pollOptions == null)
            return null;

        long total = pollOptions.stream().mapToLong(PollOption::getVoteCount).sum();
        return pollOptions.stream().map(option -> {
            if (total == 0)
                return 0.0;
            else
                return ((double) option.getVoteCount() / total) * 100;
        }).collect(Collectors.toList());
    }

    @JsonProperty("totalVotes")
    public long getTotalVotes() {
        if (pollOptions == null)
            return 0;

        return pollOptions.stream().mapToLong(PollOption::getVoteCount).sum();
    }
}
