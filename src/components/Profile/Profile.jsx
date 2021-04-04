import ProfileInfos from "./ProfileInfo/ProfileInfos";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfos/>

            <MyPostsContainer store={props.store} />

        </div>

    )
}
export default Profile;
