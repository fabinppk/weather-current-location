import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Index from '_pages/index';
import { WEATHER } from '_config/mocks-weather';

it('renders Index with weather', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    );
    expect(getByTestId('empty-weather')).toBeInTheDocument();
});

describe('<Login /> with no props', () => {
    const container = shallow(<Index />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have ShimmerIndex component', () => {
        expect(container.find('ShimmerIndex').length).toEqual(1);
    });

    it('should have ShimmerMinMax component', () => {
        expect(container.find('ShimmerMinMax').length).toEqual(1);
    });
});

describe('<Login /> with props', () => {
    const weather = WEATHER;

    const container = shallow(<Index propsWeather={weather} />);

    it('should show temperature 26º', () => {
        expect(container.find('.value').props()).toEqual({
            children: '26',
            className: 'value',
        });
    });

    it('should show Florianópolis, BR', () => {
        expect(container.find('.location').props()).toEqual({
            children: 'Florianópolis, BR',
            className: 'location',
        });
    });

    it('should show nublado', () => {
        expect(container.find('.description').props()).toEqual({
            children: 'nublado',
            className: 'description',
        });
    });

    it('should have MinMax component', () => {
        expect(container.find('MinMax').length).toEqual(1);
    });
});
