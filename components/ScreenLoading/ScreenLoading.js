/**
 * Loading screen
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import Screen from '../Screen/Screen';

const ScreenLoading = () => (
    <Screen full>
        <ActivityIndicator size="large" color="#19191f" />
    </Screen>
);

export default ScreenLoading;
