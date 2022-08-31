import { cleanup } from '@testing-library/react'
import React, { useRef } from 'react';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import Timer from './Timer';

jest.mock('react', () => {
    return {
        ...jest.requireActual('react'),
        useRef: jest.fn(),
    };
});

const useMockRef = jest.mocked(useRef);

afterEach(cleanup);

describe('Timer component', () => {
    it('snapshot renders correctly, truthy values', () => {
        const cardView = renderer
            .create(<Timer
                timerStarted={false}
                ref={useMockRef}
            />).toJSON()
        expect(cardView).toMatchSnapshot()
    });
    it('snapshot renders correctly, falsy values', () => {
        const cardView = renderer
            .create(<Timer
                timerStarted={''}
                ref={null}
            />).toJSON()
        expect(cardView).toMatchSnapshot()
    });
});

