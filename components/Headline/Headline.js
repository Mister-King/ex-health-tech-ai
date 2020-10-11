/**
 * ButtonContainer component
 */

import React from 'react';
import { Text } from 'react-native';

import styles from './_headline.scss';

const Headline = props => {
    return (
        <Text className={`
            ${styles.headline}
            ${props.type ? styles['headline--' + props.type] : null}
            ${props.style}
        `}>
            {props.children}
        </Text>
    );
};

export default Headline;
