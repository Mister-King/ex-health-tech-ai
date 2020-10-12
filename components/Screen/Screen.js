/**
 * Screen component
 */

import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import styles from './_screen.scss';

const Screen = props => {
    const classNames = [styles.screen];
    if (props.full) { classNames.push(styles['screen--full']); }
    if (props.trim) { classNames.push(styles['screen--trim']); }

    return (
        <>
            <StatusBar />
            <View className={classNames}>
                {props.scrollable ? (
                    <ScrollView>{props.children}</ScrollView>
                ) : (
                    <>{props.children}</>
                )}
            </View>
        </>
    );
};

export default Screen;
