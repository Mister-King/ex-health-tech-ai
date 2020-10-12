/**
 * PostComment component
 */

import React from 'react';
import { View, Text } from 'react-native';
import Headline from '../../Headline/Headline';
import styles from './_postcomment.scss';

const PostComment = props => (
    <View className={styles.comment}>
        <Headline
            type="tertiary"
            className={styles.comment__name}
        >
            {props.name}
        </Headline>

        <Text>{props.comment}</Text>
    </View>
);

export default PostComment;
