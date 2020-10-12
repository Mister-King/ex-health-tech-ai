/**
 * PostDetail component
 */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Headline from '../../Headline/Headline';
import PostComment from '../PostComment/PostComment';

import styles from './_postdetail.scss';

const PostDetail = props => {
    const {
        post,
        author,
        comments,
    } = props;

    // Internal functions
    const renderComments = ({ item }) => (
        <PostComment
            name={item.name}
            comment={item.body}
        />
    );

    const renderPostBody = () => (
        <>
            <Headline className={styles.post__title}>{post.title}</Headline>
            <Text className={styles.post__author}>by {author.username}</Text>
            <Text className={styles.post__body}>{post.body}</Text>

            <Headline type="secondary">Comments</Headline>
        </>
    );

    // Render
    return (
        <View className={styles.post}>
            <FlatList
                ListHeaderComponent={renderPostBody}
                data={comments}
                renderItem={renderComments}
                keyExtractor={item => item.id.toString()}
                className={styles.post__container}
            />
        </View>
    );
};

export default PostDetail;
