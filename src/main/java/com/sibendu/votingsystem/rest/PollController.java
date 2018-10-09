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

    @GetMapping("/polls/{poll_id}")
    public ResponseEntity<Poll> getPoll(@PathVariable Long poll_id) {
        return new ResponseEntity<>(pollService.getPoll(poll_id), HttpStatus.OK);
    }
}
