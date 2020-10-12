/**
 * Posts component
 */

import React from 'react';
import { View, FlatList } from 'react-native';
import PostItem from './PostItem/PostItem';

import styles from './_posts.scss';
import ListDivider from '../ListDivider/ListDivider';

const Posts = props => {
    const {
        posts,
        updateActivePost,
        navigation,
    } = props;

    // Internal Functions
    const renderItem = ({ item }) => (
        <PostItem
            title={item.title}
            id={item.id}
            updateActivePost={updateActivePost}
            navigation={navigation}
        />
    );

    // Render
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                className={styles.postlist}
                ItemSeparatorComponent={() => <ListDivider />}
            />
        </View>
    );
};

export default Posts;
