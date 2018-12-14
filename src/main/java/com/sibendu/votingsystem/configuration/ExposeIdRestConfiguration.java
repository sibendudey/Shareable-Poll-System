package com.sibendu.votingsystem.configuration;

import com.sibendu.votingsystem.pojos.PollOption;
import com.sibendu.votingsystem.pojos.Poll;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

/***
 * This configuration is used for sending the created asset id.
 */
@Component
public class ExposeIdRestConfiguration extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Poll.class, PollOption.class);
        config.getCorsRegistry().addMapping("/**")
                .allowedMethods("GET", "POST", "PUT");
    }
}
