/**
 * Screen component
 */

import React  from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import styles from './_screen.scss';

const Screen = props => {
    return (
        <>
            <StatusBar />
            <SafeAreaView
                className={`
                    ${styles.screen}
                    ${props.full ? styles['screen--full'] : null}
                `}
            >

                <View className={`
                    ${styles.screen__view}
                    ${props.trim ? styles['screen__view--trim'] : null}
                `}>
                    { props.scrollable ?
                        <ScrollView>
                                {props.children}
                        </ScrollView>
                        :
                        <>
                            {props.children}
                        </>
                    }
                </View>
            </SafeAreaView>
        </>
    );
};

export default Screen;
