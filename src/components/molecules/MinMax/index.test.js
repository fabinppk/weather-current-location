import React from 'react';
import { shallow } from 'enzyme';
import MinMax from '_molecules/MinMax';
import { WEATHER } from '_config/mocks-weather';

describe('<MinMax /> with props', () => {
    const container = shallow(<MinMax min={WEATHER.main.temp_min} max={WEATHER.main.temp_max} />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have Arrow component', () => {
        expect(container.find('Arrow').length).toEqual(2);
    });

    it('should show in blockMin', () => {
        expect(container.find('.blockMin p').props().children).toEqual(['24', 'ºC']);
    });

    it('should show in blockMax', () => {
        expect(container.find('.blockMax p').props().children).toEqual(['28', 'ºC']);
    });
});
