package com.sibendu.votingsystem.users.basicUsers;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BasicUserRepository extends CrudRepository<BasicUser, Long> {
}
