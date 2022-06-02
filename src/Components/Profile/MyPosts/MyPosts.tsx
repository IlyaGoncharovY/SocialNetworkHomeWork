import React, {ChangeEvent, useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsPropsType = {
    title: string
    postDataPropsType: postDataPropsType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (updateNewPostText: string) => void
    newPostText: string
}

type postDataPropsType = {
    id: string
    message: string
    likeCount: number
}

// const postData = [
//     {id: "1", message: "Hello! how are you?", likeCount: 15},
//     {id: "2", message: "Its my first post", likeCount: 20}
//
// ]


const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postDataPropsType.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                               key={el.id}/>)

    //  let [message, setMessage] = useState<string>()

    //let newPostElement = useRef<HTMLTextAreaElement>(null);

    let onClickHandlerAddPost = () => {
        // let text = newPostElement.current;
        //if (text) {
       // props.addPost(props.newPostText)
        //}
        props.dispatch({type: "ADD-POST"})

    }

    let onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let text = newPostElement.current;
        //if (text) {
       // props.updateNewPostText(e.currentTarget.value)
        //}
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: newText}
        props.dispatch(action)
    }

    return (
        <div className={s.postBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    {/*<input ref={newPostElement}></input>*/}
                    <textarea onChange={onChangeHandlerPost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickHandlerAddPost}>add post</button>
                </div>
                <div>
                    <button>post remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
                {/*<Post message={postData[0].message} likeCount = {postData[0].likeCount}/>*/}
                {/*<Post message ={postData[1].message} likeCount = {postData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;