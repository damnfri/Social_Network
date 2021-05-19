import React from "react";
import users from './User.module.css';
import * as axios from "axios";

let src = 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=2048x2048'
// let User = (props) => {
//     let addUser = () => {
//         if (props.user.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 // let test = [{
//                 //     id: 1,
//                 //     userName: response.data.items[0]['name'],
//                 //     userCountry: "United States",
//                 //     userCity: "Boston",
//                 //     userStatus: "Mom, i`m in Boston",
//                 //     userFollowed: false,
//                 //     photoUrl: src,
//                 // }]
//
//
//                 props.addUser(response.data.items);
//             })
//         }
//     }
//
//     return <div>
//         <button onClick={() => addUser()}>add New User</button>
//
//         {
//             props.user.users.map(u => <div key={u.id}>
//                 <div className={users.item}>
//                     <img alt='logo' src={u.photoUrl}/><br/>
//                     <p> Username: {u.userName}<br/>
//                         Status: {u.userStatus}<br/>
//                         Country: {u.userCountry}<br/>
//                         City: {u.userCity}<br/></p>
//                     {u.userFollowed
//                         ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
//                         : <button onClick={() => props.followUser(u.id)}>Follow</button>}
//
//
//                 </div>
//             </div>)
//         }
//     </div>
// }

class User extends React.Component {



    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.addUser(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount)
            console.log(response.data.totalCount);
        })
    }

    addUser = () => {
        this.props.addUser([
            {
                name: "this is test",
                status: ""
            }
        ])
    };


    setPage = (clickedPage) => {
        let clickedPage1 = clickedPage ;
        this.props.setPage(clickedPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${clickedPage}&count=${this.props.pageSize}`)
            .then(response => {

            this.props.addUser(response.data.items);

        })
    }

    render() {
        let pageNumber = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }
        console.log(this.props.currentPage);
        console.log(pages);
        return <div>
            <button onClick={() => this.addUser()}>add New User</button>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && users.pages}
                                 onClick={(e) => {
                                     this.setPage(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                this.props.user.users.map(u => <div key={u.id}>
                    <div className={users.item}>
                        <img alt='logo' src={u.photoUrl}/><br/>
                        <p> Username: {u.userName}<br/>
                            Status: {u.userStatus}<br/>
                            Country: {u.userCountry}<br/>
                            City: {u.userCity}<br/></p>
                        {u.userFollowed
                            ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.followUser(u.id)}>Follow</button>}


                    </div>
                </div>)
            }
        </div>
    }
}
export default User;