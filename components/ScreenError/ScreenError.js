/**
 * Error screen
 */

import React from 'react';
import { Button, Text } from 'react-native';

import Headline from '../Headline/Headline';
import Screen from '../Screen/Screen';

const ScreenError = props => (
    <Screen full>
        <Headline>Oh no!</Headline>
        <Text>Something went wrong. Try again in a bit.</Text>
        <Button title="Try again" onPress={() => props.fetchData()} />
    </Screen>
);

export default ScreenError;
