/* eslint no-undef: 0 */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Posts from '../components/Posts/Posts';
import { PostsData } from '../jest/jest.data';

test('renders list of post titles', () => {
    const tree = renderer.create(
        <Posts posts={PostsData} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
