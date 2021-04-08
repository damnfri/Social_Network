import Post from "./Post/Post";
import React from "react";
import MyPostsCSS from "./MyPosts.module.css";


const MyPosts = (props) => {
    let myPostsJSX = props.myPosts.myPostsArray.map(post => <Post number={post.id} key={post.id} likes={post.likes}
                                                                  src={post.src}
                                                                  message={post.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value === '') return;
        props.addPost();


    };
    let changeTextarea = () => {
        let text = newPostElement.current.value;
        props.changeTextarea(text);

    };

    return (
        <div>
            <div>
                <div className={MyPostsCSS.test}>
            <textarea
                onChange={changeTextarea}
                value={props.myPosts.currentTextarea}
                ref={newPostElement}
                placeholder="Write what do u want to post!"/>

                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            My Post
            <div>
                {myPostsJSX}
            </div>
        </div>
    )
}
export default MyPosts;
