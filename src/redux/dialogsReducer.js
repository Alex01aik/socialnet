const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
    dialogsItems: [
      {id: 1, name: "Alex"},
      {id: 2, name: "Dmitriy"},
      {id: 3, name: "Oleg"},
      {id: 4, name: "Ivan"},
      {id: 5, name: "Vlad"},
    ],
    messages:[
      {id: 1, text: "Hi"},
      {id: 2, text: "How are you?"},
      {id: 3, text: "Yo"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText="";
            return stateCopy;
        }
        case UPDATE_MESSAGE:{
            let stateCopy = {...state,
                newMessageText: action.newText};
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateMessage = (newText) => ({type: UPDATE_MESSAGE, newText});

export default dialogsReducer;