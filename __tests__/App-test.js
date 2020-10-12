/* eslint no-undef: 0 */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import axios from 'axios';
import { PostsData, UsersData, CommentsData } from '../jest/jest.data';
import App from '../App';

jest.mock('axios');

test('renders activity spinner on load', () => {
    jest.useFakeTimers();

    const tree = create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders error screen on API error', () => {
    jest.useFakeTimers();

    axios.get.mockImplementation(() => Promise.reject(new Error('not found')));

    let tree;

    act(() => {
        tree = create(<App/>);
        jest.runAllTimers();
    });

    expect(tree.toJSON()).toMatchSnapshot();
});

test('fetches data from API and renders posts', async () => {
    jest.useFakeTimers();

    axios.get.mockImplementation((url) => {
        switch (url) {
        case 'http://jsonplaceholder.typicode.com/posts':
            return Promise.resolve({ data: PostsData });
        case 'http://jsonplaceholder.typicode.com/users':
            return Promise.resolve({ data: UsersData });
        case 'http://jsonplaceholder.typicode.com/comments':
            return Promise.resolve({ data: CommentsData });
        default:
            return Promise.reject(new Error('not found'));
        }
    });

    let tree;

    act(() => {
        tree = create(<App />);
        jest.runAllTimers();
    });
    expect(tree.toJSON()).toMatchSnapshot();
});
