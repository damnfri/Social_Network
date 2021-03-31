import MyPosts from "./MyPosts/MyPosts";
import ProfileInfos from "./ProfileInfo/ProfileInfos";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfos/>

            <MyPosts myPosts={props.myPosts}
                     dispatch={props.dispatch}
                     />

        </div>

    )
}
export default Profile;
