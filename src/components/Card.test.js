import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import Card from './Card';

const cardMock = {
    className: 'card-image-11',
    matched: false,
    id: 0.6999073561281655
}

afterEach(cleanup);

describe('Card component', () => {
    it('snapshot renders correctly, truthy values', () => {
        const cardView = renderer
            .create(<Card
                key={cardMock.id}
                card={cardMock}
                setChoose={null}
                flip={false}
                disabled={false}
            />).toJSON()
        expect(cardView).toMatchSnapshot()
    });
    it('snapshot renders correctly, falsy values', () => {
        const cardView = renderer
            .create(<Card
                card={{className: '', matched: '', id: ''}}
            />).toJSON()
        expect(cardView).toMatchSnapshot()
    });
});

