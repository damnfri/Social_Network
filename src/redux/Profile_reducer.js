let UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
let ADD_POST = 'ADD_POST';


const text = "Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности."
const src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'
let initialState = {
    myPostsArray: [
        // {id: 1, message: text, likes: '24', src: src,},
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
let id = 1;
let key = 0;
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {

        case UPDATE_POST_TEXT:
            stateCopy.currentTextarea = action.newText;// clear function does not change state
            return stateCopy;
        case ADD_POST:
            let newPost = {
                id: id++,
                key: key++,
                message: state.currentTextarea,
                likes: '33',
                src: src,
            }

            stateCopy.myPostsArray.push(newPost);
            stateCopy.currentTextarea = '';
            return stateCopy;
        default:
            return state;

    }
}
export default profileReducer;


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
