import React from "react";
import users from './User.module.css';


const User = (props) => {


    return <div>
        <button onClick={() => props.addUser()}>add New User</button>

        {
            props.user.users.map(u => <div key={u.id}>
                <div className={users.item}>
                    <img alt='logo' src={u.photoUrl}/><br/>
                    <p> Username: {u.userName}<br/>
                        Status: {u.userStatus}<br/>
                        Country: {u.userCountry}<br/>
                        City: {u.userCity}<br/></p>
                    {u.userFollowed
                        ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                        : <button onClick={() => props.followUser(u.id)}>Follow</button>}


                </div>
            </div>)
        }
    </div>
}
export default User;
