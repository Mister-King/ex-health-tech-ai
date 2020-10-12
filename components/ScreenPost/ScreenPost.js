/**
 * Post screen
 */

import React, { useContext } from 'react';
import Screen from '../Screen/Screen';
import PostDetail from '../Posts/PostDetail/PostDetail';
import PostsContext from '../Posts/PostsContext';

const ScreenPost = () => {
    const context = useContext(PostsContext);
    const {
        posts,
        users,
        comments,
    } = context.data;

    const post = posts.find(item => item.id === context.activePostId);

    const author = post ? users.find(user => user.id === post.userId) : null;

    const postComments = post ? comments.filter(allComments => allComments.postId === post.id) : null;

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
