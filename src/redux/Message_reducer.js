let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Oleg', },
        {id: 2, name: 'Vasya', },
        {id: 3, name: 'Alex', },
        {id: 4, name: 'Jenya',},
        {id: 5, name: 'Igor', },
        {id: 6, name: 'Peter',},
        {id: 7, name: 'Dimich',},
        {id: 8, name: 'Steffen',},
    ],
    messages: [
        {id: 1, message: "Okay was geht ab1?"},
        {id: 2, message: "Okay was geht ab1?"},
        {id: 3, message: "Okay was geht ab1?"},
    ],
    currentTextarea: '',
};

const messageReducer = (state= initialState, action) => {
    let id = 1;
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: id++,
                message: state.currentTextarea,
            }
            state.messages.push(newMessage);
            state.currentTextarea = '';

            return state;
        case UPDATE_MESSAGE_TEXT:
            state.currentTextarea = action.newText;
            return state;
        default:
            return state;
    }
}
export default messageReducer;

export const addMessageActionCreator = () =>({type:ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type:UPDATE_MESSAGE_TEXT, newText: text});
