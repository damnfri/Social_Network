import React from "react";
import {connect} from "react-redux";
import {addUserActionCreator, followUserActionCreator, unfollowUserActionCreator} from "../../../redux/User_reducer";
import User from "./User";
let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

const mapStateToProps = (state) =>{
    return{
        user :state.usersPage,
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        addUser: (newUser)=>{
            // let newUser = [{
            //     id: 1,
            //     userName: 'Jimmy Hendrx',
            //     userCountry: "United States",
            //     userCity: "Boston",
            //     userStatus: "Mom, i`m in Boston",
            //     userFollowed: false,
            //     photoUrl: src,
            //
            // }, {
            //     id: 2,
            //     userName: 'Jimmy Hendrx',
            //     userCountry: "United States",
            //     userCity: "Boston",
            //     userStatus: "Mom, i`m in Boston",
            //     userFollowed: false,
            //     photoUrl: src,
            // }
            // ]
            dispatch(addUserActionCreator(newUser));
        },
        followUser: (userId) =>{
            dispatch(followUserActionCreator(userId));
        },
        unfollowUser: (userId) =>{
            dispatch(unfollowUserActionCreator(userId));
        }

    }
}

const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User);
export default UserContainer;
