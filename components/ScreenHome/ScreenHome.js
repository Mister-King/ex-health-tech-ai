/**
 * Home screen
 */

import React, { useContext } from 'react';

import Screen from '../Screen/Screen';
import Posts from '../Posts/Posts';
import PostsContext from '../Posts/PostsContext';

const ScreenHome = props => {
    const context = useContext(PostsContext);
    const { data } = context;

    return (
        <Screen trim>
            <Posts
                updateActivePost={context.updateActivePost}
                posts={data.posts}
                navigation={props.navigation}
            />
        </Screen>
    );
};

export default ScreenHome;
