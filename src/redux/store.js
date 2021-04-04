import React from "react";
import profileReducer from "./Profile_reducer";
import messageReducer from "./Message_reducer";


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
            currentTextarea: '',
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

     this._state.profilePage = profileReducer(this._state.profilePage, action);
     this._state.messagePage = messageReducer(this._state.messagePage, action);
     this._callSubscriber(this.getState());

    }

}
export default store;



