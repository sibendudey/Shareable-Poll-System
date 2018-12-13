package com.sibendu.votingsystem.repository;

import com.sibendu.votingsystem.pojos.Option;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface OptionRepository extends CrudRepository<Option, Long> {
}
