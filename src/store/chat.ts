import { Subject, Subscription } from 'rxjs'
import { StateType, DataType } from "utils";
import { Dispatch, SetStateAction } from 'react';

const subject = new Subject<StateType>();

const initialState: StateType = {
  status: '',
  data: [],
  newDataCount: 0,
  error: ''
};

let state = initialState;


const chatStore = {
  init: () => {
    state = {...state, newDataCount: 0}
    subject.next(state)
  },
  
  subscribe: (next: Dispatch<SetStateAction<StateType>> | undefined) : Subscription => 
    subject.subscribe({ next }),

  sendMessage: (message : DataType) : void => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1
    };
    subject.next(state);
  },
  
  clearChat: () : void => {
    state = initialState;
    subject.next(state);
  },
  initialState
};

export default chatStore;