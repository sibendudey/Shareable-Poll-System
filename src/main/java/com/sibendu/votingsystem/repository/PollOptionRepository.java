package com.sibendu.votingsystem.repository;

import com.sibendu.votingsystem.pojos.PollOption;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface PollOptionRepository extends CrudRepository<PollOption, Long> {
}
