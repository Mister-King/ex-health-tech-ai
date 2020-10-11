/**
 * Post screen
 */

import React, { useContext } from 'react';
import Screen from '../Screen/Screen';
import PostDetail from '../Posts/PostDetail/PostDetail';
import { PostsContext } from '../Posts/PostsContext';

const ScreenPost = () => {
    const context = useContext(PostsContext);
    const {
        posts,
        users,
        comments
    } = context.data;

    const post = posts.find(post => {
        return post.id === context.activePostId
    })

    const author = users.find(user => {
        return user.id === post.userId
    })

    const postComments = comments.filter(allComments => {
        return allComments.postId === post.id
    })

    return (
        <Screen trim>
            <PostDetail
                post={post}
                author={author}
                comments={postComments}
            />
        </Screen>
    );
};

export default ScreenPost;
