import MyPosts from "./MyPosts/MyPosts";
import ProfileInfos from "./ProfileInfo/ProfileInfos";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfos/>

            <MyPosts myPosts={props.myPosts}
                     addPost={props.addPost}
                     addText={props.addText}
                     />

        </div>

    )
}
export default Profile;
