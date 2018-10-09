package com.sibendu.votingsystem.repository;

import com.sibendu.votingsystem.pojos.Option;
import com.sibendu.votingsystem.pojos.Poll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
public interface PollRepository extends CrudRepository<Poll, Long> {

}
