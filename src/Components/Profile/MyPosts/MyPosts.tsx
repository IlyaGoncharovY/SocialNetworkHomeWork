import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {containerPostType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type AddNewPostFormType = {
    newPostText: string
}

function AddNewPostForm(props: InjectedFormProps<AddNewPostFormType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
                {/*<textarea onChange={props.onChange} value={props.value}/>*/}
            </div>
            <div>
                <button>add post</button>
            </div>
            <div>
                <button>post remove</button>
            </div>
        </form>
    );
}

export const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export const MyPosts = (props: containerPostType) => {
    let postsElement = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}
                                                   key={el.id}/>)


    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    // let onChangeHandlerPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.updateNewPostText(text)
    // }

    return (
        <div className={s.postBlock}>
            <h3>{props.title}</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

