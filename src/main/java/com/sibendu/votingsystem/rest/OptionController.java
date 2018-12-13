package com.sibendu.votingsystem.rest;

import com.sibendu.votingsystem.pojos.Option;
import com.sibendu.votingsystem.pojos.Poll;
import com.sibendu.votingsystem.repository.OptionRepository;
import com.sibendu.votingsystem.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/voting-system/web-api/v1/")
public class OptionController {
    private OptionRepository optionRepository;
    private PollRepository pollRepository;
    @Autowired
    public OptionController(OptionRepository optionRepository, PollRepository pollRepository)  {
        this.optionRepository = optionRepository;
        this.pollRepository = pollRepository;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/create-options")
    public ResponseEntity<Option[]> saveOptions(@RequestBody PollOptions poll)    {
        Poll p = pollRepository.findById(poll.id).get();
        List<Option> options = poll.options.stream().map((option) -> {
            option.setPoll(p);
            return option;
        }).collect(Collectors.toList());

        optionRepository.saveAll(options);
        return ResponseEntity.ok().build();
    }

    static class PollOptions   {
        long id;
        List<Option> options;
        PollOptions(long id, List<Option> options)   {
            this.id = id;
            this.options = options;
        }
    }
}
