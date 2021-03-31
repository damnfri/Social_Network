import React from "react";

let ADD_TEXT = 'ADD_TEXT';
let ADD_POST = 'ADD_POST';


let rerenderEntireTree = () =>{

}
let text = "Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности."
let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

let store = {
    _state: {
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Oleg', message: "Okay was geht ab1?"},
                {id: 2, name: 'Vasya', message: "Okay was geht ab2?"},
                {id: 3, name: 'Alex', message: "Okay was geht ab3?"},
                {id: 4, name: 'Jenya', message: "Okay was geht ab4?"},
                {id: 5, name: 'Igor', message: "Okay was geht ab5?"},
                {id: 6, name: 'Peter', message: "Okay was geht ab6?"},
                {id: 7, name: 'Dimich', message: "Okay was geht ab7?"},
                {id: 8, name: 'Steffen', message: "Okay was geht ab8?"},
            ],
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
    _callSubscriber(){

    },
    dispatch(action) {
        switch (action.type){
            case ADD_TEXT:
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
                this._callSubscriber(this._state);
                break;
        }
    }

}
let id = 1;
// export let addPost = () => {
//     let newPost = {
//         id: id++,
//         message: state.profilePage.currentTextarea,
//         likes: '33',
//         src: src,
//     }
//     state.profilePage.myPostsArray.push(newPost);
//     rerenderEntireTree(state,addPost,addText);
// };
// export let addText = (text) =>{
//     state.profilePage.currentTextarea = text;
//     rerenderEntireTree(state,addPost,addText);
// };
//
// export const subscribe = (observer) =>{
//
// }
export default store;
