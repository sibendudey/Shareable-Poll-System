package com.sibendu.votingsystem.rest;

import com.sibendu.votingsystem.pojos.Poll;
import com.sibendu.votingsystem.services.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/responseApi/v1")
public class PollController {
    @Autowired
    PollService pollService;

    @PostMapping("/createPoll")
    public ResponseEntity createPoll(Poll poll) {
        pollService.createPoll(poll);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/polls/{pollId}")
    public ResponseEntity<Poll> getPoll(@PathVariable Long pollId) {
        return new ResponseEntity<>(pollService.getPoll(pollId), HttpStatus.OK);
    }
}
