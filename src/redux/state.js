import React from "react";

let UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
let ADD_POST = 'ADD_POST';
let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_MESSAGE_TEXT ='UPDATE_MESSAGE_TEXT';


let rerenderEntireTree = () => {

}
let text = "Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности."
let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

let store = {
    _state: {
        messagePage: {
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
        },
        profilePage: {
            myPostsArray: [
                {id: 1, message: text, likes: '24', src: src,},
                // {id: 2, message: text, likes: '65', src: src,},
                // {id: 3, message: text, likes: '33', src: src,},
                // {id: 4, message: text, likes: '12', src: src,},
                // {id: 5, message: text, likes: '24', src: src,},
                // {id: 6, message: text, likes: '65', src: src,},
                // {id: 7, message: text, likes: '33', src: src,},
                // {id: 8, message: text, likes: '12', src: src,},
            ],
            currentTextarea: 'ss',
        }
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {

    },
    dispatch(action) {
        switch (action.type) {
            case UPDATE_POST_TEXT:
                this._state.profilePage.currentTextarea = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_POST:
                let newPost = {
                    id: id++,
                    message: this._state.profilePage.currentTextarea,
                    likes: '33',
                    src: src,
                }
                this._state.profilePage.myPostsArray.push(newPost);
                this._state.profilePage.currentTextarea = '';
                this._callSubscriber(this._state);
                break;


            case ADD_MESSAGE:
                let newMessage = {
                    id: id++,
                    message: this._state.messagePage.currentTextarea,
                }
                this._state.messagePage.messages.push(newMessage);
                this._state.messagePage.currentTextarea = '';
                this._callSubscriber(this.getState());
                break;
            case UPDATE_MESSAGE_TEXT:
                this._state.messagePage.currentTextarea = action.newText;
                this._callSubscriber(this.getState());
                break;

        }
    }

}
let id = 1;

export default store;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export const addMessageActionCreator = () =>({type:ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type:UPDATE_MESSAGE_TEXT, newText: text});

