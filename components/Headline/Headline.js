/**
 * ButtonContainer component
 */

import React from 'react';
import { Text } from 'react-native';

import styles from './_headline.scss';

const Headline = props => {
    let classNames = [styles.headline];
    props.type  && classNames.push(styles[`headline--${props.type}`]);
    props.style && classNames.push(props.style);

    return (
        <Text className={classNames}>
            {props.children}
        </Text>
    );
};

export default Headline;
