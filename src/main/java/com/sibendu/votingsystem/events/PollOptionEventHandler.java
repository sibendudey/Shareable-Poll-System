package com.sibendu.votingsystem.events;

import com.sibendu.votingsystem.pojos.Poll;
import com.sibendu.votingsystem.pojos.PollOption;
import com.sibendu.votingsystem.services.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import static com.sibendu.votingsystem.configuration.WebSocketConfiguration.MESSAGE_PREFIX;

@Component
@RepositoryEventHandler(PollOption.class)
public class PollOptionEventHandler {
    private final SimpMessagingTemplate webSocket;
    private final PollService pollService;

    @Autowired
    public PollOptionEventHandler(SimpMessagingTemplate webSocket, PollService pollService) {
        this.webSocket = webSocket;
        this.pollService = pollService;
    }

    @HandleAfterSave
    public void handleAfterVote(PollOption pollOption) {
        Poll poll = pollService.getPoll(pollOption.getPoll().getId());
        this.webSocket.convertAndSend(MESSAGE_PREFIX + "/update_poll/" + pollOption.getPoll().getId(), poll);
    }
}
