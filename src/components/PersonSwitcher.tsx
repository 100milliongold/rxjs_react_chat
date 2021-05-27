import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import chatStore from '../store/chat';
import { Notify , SwitcherDiv, Switcher } from "components";

const PersonSwitcher = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = window.location.href.split('/')[3];

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, [])

  const messageNotification = chatState.newDataCount > 0
    && (<Notify>{chatState.newDataCount}</Notify>);

  return (
    <SwitcherDiv className="switcher-div">
      <Link to="/first-person">
        <Switcher className="switcher">
          Person1
          {location !== 'first-person' && location.length > 1 && messageNotification}
        </Switcher>
      </Link>
      <Link to="/second-person">
        <Switcher className="switcher">
          Person2
          {location !== 'second-person' && messageNotification}
        </Switcher>
      </Link>
    </SwitcherDiv>
  );
}

export default PersonSwitcher;