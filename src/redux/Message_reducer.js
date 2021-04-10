let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogsData: [
        {id: 1,key: 0, name: 'Oleg', },
        {id: 2,key: 1, name: 'Vasya', },
        {id: 3,key: 2, name: 'Alex', },
        {id: 4,key: 3, name: 'Jenya',},
        {id: 5,key: 4, name: 'Igor', },
        {id: 6,key: 5, name: 'Peter',},
        {id: 7,key: 6, name: 'Dimich',},
        {id: 8,key: 7, name: 'Steffen',},
    ],
    messages: [
        {id: 1,key: 0,  message: "Okay was geht ab1?"},
        {id: 3,key: 1, message: "Okay was geht ab1?"},
    ],
    currentTextarea: '',
};
let id = 1;
let key = 2;

const messageReducer = (state= initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                    ...state,
                    messages: [...state.messages, {id: id++, key: key++, message:state.currentTextarea}],
                    currentTextarea: '',
            }

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                currentTextarea: action.newText,
            }

        default:
            return state;
    }
}
export default messageReducer;
export const addMessageActionCreator = () =>({type:ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type:UPDATE_MESSAGE_TEXT, newText: text});
