import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('main App component', () => {
    test('match snapshot', () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });
});
