/**
 * Headline component
 */

import React from 'react';
import { Text } from 'react-native';

import styles from './_headline.scss';

const Headline = props => {
    const classNames = [styles.headline];
    if (props.type) { classNames.push(styles[`headline--${props.type}`]); }
    if (props.style) { classNames.push(props.style); }

    return <Text className={classNames}>{props.children}</Text>;
};

export default Headline;
