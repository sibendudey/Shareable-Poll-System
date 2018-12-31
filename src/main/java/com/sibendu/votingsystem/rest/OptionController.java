package com.sibendu.votingsystem.rest;

import com.sibendu.votingsystem.pojos.PollOption;
import com.sibendu.votingsystem.pojos.Poll;
import com.sibendu.votingsystem.repository.PollOptionRepository;
import com.sibendu.votingsystem.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.rest.core.event.AfterSaveEvent;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/voting-system/web-api/v1/")
public class OptionController {
    private PollOptionRepository pollOptionRepository;
    private PollRepository pollRepository;
    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    public OptionController(PollOptionRepository pollOptionRepository, PollRepository pollRepository)  {
        this.pollOptionRepository = pollOptionRepository;
        this.pollRepository = pollRepository;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/create-options")
    public ResponseEntity<PollOption[]> saveOptions(@RequestBody PollOptions poll)    {
        Poll p = pollRepository.findById(poll.id).get();
        List<PollOption> options = poll.options.stream().map((option) -> {
            option.setPoll(p);
            return option;
        }).collect(Collectors.toList());

        pollOptionRepository.saveAll(options);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(method = RequestMethod.GET, value="/vote/{voteId}")
    public ResponseEntity<Poll> vote(@PathVariable long voteId)   {
        PollOption toVote = pollOptionRepository.findById(voteId).get();
        toVote.setVoteCount(toVote.getVoteCount() + 1);
        pollOptionRepository.save(toVote);
        publisher.publishEvent(new AfterSaveEvent(toVote));
        return ResponseEntity.ok(toVote.getPoll());
    }

    static class PollOptions   {
        long id;
        List<PollOption> options;
        PollOptions(long id, List<PollOption> options)   {
            this.id = id;
            this.options = options;
        }
    }
}
