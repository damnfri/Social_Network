let ADD_USER = 'ADD_USER';
let USER_FOLLOW = 'USER_FOLLOW';
let USER_UNFOLLOW = 'USER_UNFOLLOW';
let SET_TOTALUSERCOUNT = 'SET_TOTALUSERCOUNT';
let SET_PAGE = 'SET_PAGE';

let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

let initialState = {
    users: [
        // {id: 0, userName: 'vassa1',userCountry: 'usa', userCity: 'boston',userStatus:'oOOo',userFollowed: false, photoUrl: src},
        // {id: 1, userName: 'vassa2',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
        // {id: 2, userName: 'vassa3',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
        // {id: 3, userName: 'vassa4',userCountry: 'brit', userCity: 'boston1',userStatus:'00000',userFollowed: true, photoUrl: src},
    ],
    pageSize: 5,
    totalUserCount: 2,
    currentPage: 1,

}
let id = 0;
const userReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_USER:
            let newUserData = action.newUser;
            let optimizedUser;
            let optimizedUsersArray = [];
            for (let i = 0; i < newUserData.length; i++) {

                optimizedUser = {
                    id: id++,
                    userName: newUserData[i]['name'],
                    userCountry: "United States",
                    userCity: "Boston",
                    userStatus: ((newUserData[i]['status'] === null || undefined || "") ? "Mom, i`m in Boston" : newUserData[i]['status']),
                    userFollowed: ((newUserData[i]['followed'] === null) ? false : newUserData[i]['followed']),
                    photoUrl: src,
                }
                optimizedUsersArray.push(optimizedUser);
                console.log(optimizedUser);
            }
            stateCopy.users = [...optimizedUsersArray]
            return stateCopy;
        case USER_FOLLOW:
            stateCopy.users = state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, userFollowed: true}
                }
                return u;
            })
            return stateCopy;
        // {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.userId) {
        //                 return {...u, userFollowed: true}
        //             }
        //             return u;
        //
        //         })
        //     }

        case USER_UNFOLLOW:
            stateCopy.users = state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, userFollowed: false}
                }
                return u;
            })
            return stateCopy;
        // {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.userId) {
        //                 return {...u, userFollowed: false}
        //             }
        //             return u;
        //         })
        //     }
        case SET_TOTALUSERCOUNT:
            stateCopy.totalUserCount = action.totalUserCount;
            return stateCopy;
        case SET_PAGE:
            stateCopy.currentPage = action.page;
            return stateCopy;
        default:
            return state;

    }
}
export default userReducer;


export const addUserActionCreator = (newUser) => ({type: ADD_USER, newUser});
export const followUserActionCreator = (userId) => ({type: USER_FOLLOW, userId});
export const unfollowUserActionCreator = (userId) => ({type: USER_UNFOLLOW, userId});
export const setTotalUserCountActionCreator = (totalUserCount) => ({type: SET_TOTALUSERCOUNT, totalUserCount});
export const setPageActionCreator = (page) => ({type: SET_PAGE, page});
