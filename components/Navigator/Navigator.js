/**
 * Navigator component
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenHome from '../ScreenHome/ScreenHome';
import ScreenPost from '../ScreenPost/ScreenPost';
import styles from './_navigator.scss';

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: styles.header.backgroundColor,
        },
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
);

export default Navigator;
