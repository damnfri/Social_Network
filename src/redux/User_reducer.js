let ADD_USER = 'ADD_USER';
let USER_FOLLOW ='USER_FOLLOW';
let USER_UNFOLLOW ='USER_UNFOLLOW';

let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

let initialState = {
    users: [
        // {id: 0, userName: 'vassa1',userCountry: 'usa', userCity: 'boston',userStatus:'oOOo',userFollowed: false, photoUrl: src},
        // {id: 1, userName: 'vassa2',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
        // {id: 2, userName: 'vassa3',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
        // {id: 3, userName: 'vassa4',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
    ],

}
let id = 0;
let key = 0;
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            return  {
                ...state,
                users: [...state.users, ...action.newUser]
            };
        case USER_FOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, userFollowed: true}
                    }
                    return u;

                })
            }

        case USER_UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, userFollowed: false}
                    }
                    return u;
                })}
        default:
            return state;

    }
}
export default userReducer;


export const addUserActionCreator = (newUser) => ({type: ADD_USER, newUser});
export const followUserActionCreator = (userId) => ({type: USER_FOLLOW, userId });
export const unfollowUserActionCreator = (userId) => ({type: USER_UNFOLLOW, userId});

//export const updateTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
