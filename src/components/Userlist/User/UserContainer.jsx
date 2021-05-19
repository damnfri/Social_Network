import React from "react";
import {connect} from "react-redux";
import {
    addUserActionCreator,
    followUserActionCreator, setPageActionCreator,
    setTotalUserCountActionCreator,
    unfollowUserActionCreator
} from "../../../redux/User_reducer";
import UserClass from "./UserClass";

let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'

const mapStateToProps = (state) => {
    return {
        user: state.usersPage,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => {
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
        followUser: (userId) => {
            dispatch(followUserActionCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserActionCreator(userId));
        },
        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCountActionCreator(totalUserCount));

        },
        setPage: (page) => {
            dispatch(setPageActionCreator(page));
        }

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass);
export default UserContainer;
