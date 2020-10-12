/* eslint no-undef: 0 */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenPost from '../components/ScreenPost/ScreenPost';
import PostsContext from '../components/Posts/PostsContext';
import { PostsData, UsersData, CommentsData } from '../jest/jest.data';

test('renders correct single post, user and comments', () => {
    const tree = renderer.create(
        <PostsContext.Provider
            value={
                {
                    activePostId: 1,
                    data: {
                        posts: PostsData,
                        users: UsersData,
                        comments: CommentsData,
                    },
                }
            }
        >
            <ScreenPost />
        </PostsContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
