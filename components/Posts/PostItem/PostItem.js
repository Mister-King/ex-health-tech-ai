/**
 * PostItem component
 */

import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './_postitem.scss';

const PostItem = props => {

    // Internal functions
    const handlePostPress = () => {
        props.updateActivePost(props.id);
        props.navigation.navigate('Post');
    }

    // Render
    return (
        <Pressable
            className={styles.postitem}
            onPress={handlePostPress}
        >
            <Text className={styles.postitem__text}>{props.title}</Text>
        </Pressable>
    );
};

export default PostItem;
