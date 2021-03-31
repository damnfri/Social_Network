import posts from './Post.module.css'

const Post = (props) => {

    return (
        <div className={posts.item}>
            <img src={props.src}/>
            <p>Post {props.number}</p>
            {props.message}
            <div className={posts.likes}>
                <span>{props.likes} Likes</span>
            </div>
        </div>
    )
}
export default Post;
