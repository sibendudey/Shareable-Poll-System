package com.sibendu.votingsystem.services;

import com.sibendu.votingsystem.pojos.Option;
import com.sibendu.votingsystem.pojos.Poll;
import com.sibendu.votingsystem.repository.OptionRepository;
import com.sibendu.votingsystem.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PollService {
    @Autowired
    PollRepository pollRepository;

    @Autowired
    OptionRepository optionRepository;

    public void createPoll(Poll poll) {
        pollRepository.save(poll);
    }

    public Poll getPoll(Long poll_id) {
        return pollRepository.findById(poll_id).get();
    }
}
