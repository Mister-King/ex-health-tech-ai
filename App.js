/**
 * Health Tech AI Exercise
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenError from './components/ScreenError/ScreenError';
import ScreenLoading from './components/ScreenLoading/ScreenLoading';
import ScreenHome from './components/ScreenHome/ScreenHome';
import ScreenPost from './components/ScreenPost/ScreenPost';


import styles from './_app.scss';

const Stack = createStackNavigator();
import PostsContext from './components/Posts/PostsContext';

// eslint-disable-next-line no-undef
const App: () => React$Node = () => {
    // State
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [activePostId, setActivePostId] = useState(null);

    // Internal functions
    const fetchData = async () => {
        let posts;
        let users;
        let comments;

        setIsLoading(true);
        setError(false);

        try {
            posts = await axios.get('http://jsonplaceholder.typicode.com/posts')
                .then(response => response.data);

            if (posts) {
                users = await axios.get('http://jsonplaceholder.typicode.com/users')
                    .then(response => response.data);
            }

            if (users) {
                comments = await axios.get('http://jsonplaceholder.typicode.com/comments')
                    .then(response => response.data);
            }

            setData({ posts, users, comments });
        } catch (err) {
            setError(true);
        } finally {
            setTimeout(() => setIsLoading(false), 300);
        }
    };

    const updateActivePost = id => {
        setActivePostId(id);
    };

    // On mount
    useEffect(() => { fetchData(); }, []);

    // Render
    // Error screen
    if (!isLoading && error) {
        return <ScreenError fetchData={fetchData} />;
    }

    // Main navigation screens
    if (!isLoading && data) {
        return (
            <PostsContext.Provider
                value={
                    {
                        updateActivePost,
                        activePostId,
                        data,
                    }
                }
            >
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: styles['nav-header']
                    }}>
                        <Stack.Screen
                            name="Posts"
                            component={ScreenHome}
                        />
                        <Stack.Screen
                            name="Post"
                            component={ScreenPost}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PostsContext.Provider>
        );
    }

    // Loading screen
    return <ScreenLoading />;
};

export default App;
