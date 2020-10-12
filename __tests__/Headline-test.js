/* eslint no-undef: 0 */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Headline from '../components/Headline/Headline';

// Note: test renderer must be required after react-native.

test('renders default headline', () => {
    const tree = renderer.create(
        <Headline>Test Headline</Headline>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders secondary headline', () => {
    const tree = renderer.create(
        <Headline type="secondary">Test Secondary Headline</Headline>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders custom styles headline', () => {
    const tree = renderer.create(
        <Headline className="test-styles">Test Custom Styles Headline</Headline>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
