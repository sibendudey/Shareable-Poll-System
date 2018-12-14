package com.sibendu.votingsystem.repository;

import com.sibendu.votingsystem.pojos.Poll;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PollRepository extends CrudRepository<Poll, Long> {

}
