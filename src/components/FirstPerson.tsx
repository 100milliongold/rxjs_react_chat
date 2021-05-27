import  React, { useState, useLayoutEffect, useCallback, FormEvent } from  "react";

import { StateType, DataType } from "utils";
import { chatStore } from "store";
import { Container, ChatBox, Clear, Form, ClearButton, Person } from "components";

const FirstPerson = () => {
    const [chatState, setChatState] = useState<StateType>(chatStore.initialState);

    const [input, setInput] = useState<string | undefined>()

    useLayoutEffect(()=> {
        chatStore.subscribe(setChatState);
        chatStore.init();
    },[]);

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const messageObject : DataType = {
            person: 'first-person',
            text: input,
        };
        chatStore.sendMessage(messageObject);
        setInput("")
    };

    return (
        <Container>
            <h2>Mycroft</h2>
            <ChatBox>
                {chatState.data && chatState.data.map(message => (
                <div>
                    <Person className={message.person}>{message.text}</Person>
                    <Clear />0
                </div>
                ))}
            </ChatBox>
            <Form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    placeholder="type here..."
                    required
                    value={input}
                    onChange={useCallback(e => setInput(e.target.value),[])}
                />
                <button type="submit">Send</button> <br />
            </Form>
            <ClearButton type="button" className="clear-button" onClick={() => chatStore.clearChat()}>
                Clear Chat
            </ClearButton>
        </Container>
  );
}

export default FirstPerson;