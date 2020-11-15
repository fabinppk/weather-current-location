import React from 'react';
import { shallow } from 'enzyme';
import ButtonRefresh from '_atoms/ButtonRefresh';

describe('<ButtonRefresh /> Rotate True', () => {
    const container = shallow(<ButtonRefresh rotate setLoading={() => {}} />);

    it('should have class rotate', () => {
        expect(container.find('.rotate').length).toEqual(1);
    });
});

describe('<ButtonRefresh /> Rotate False', () => {
    const container = shallow(<ButtonRefresh rotate={false} setLoading={() => {}} />);

    it('should dont have class rotate', () => {
        expect(container.find('.rotate').length).toEqual(0);
    });
});
