import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { competition0 } from './../../../__tests_constants__';

import { CompetitionComponent } from './../Competition';
import CompetitionSummary from './../CompetitionSummary';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        competition: competition0,
        delete: jest.fn(),
    };
    const wrapper = mount(<CompetitionComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('competition component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('row')).toBe(true);
        expect(wrapper.find('div').at(2).hasClass('col-9')).toBe(true);
        expect(wrapper.find('a').prop('href')).toBe('#competitionSummaryid0');
        expect(wrapper.find('a').prop('data-toggle')).toBe('collapse');
        expect(wrapper.find('a').text()).toBe('MLB world series 2017');
        expect(wrapper.find('div').at(3).hasClass('col-3')).toBe(true);
        expect(wrapper.find('button').text()).toBe('×');
        expect(wrapper.find('div').at(4).hasClass('collapse')).toBe(true);
        expect(wrapper.find('div').at(4).prop('id')).toBe('competitionSummaryid0');
        expect(wrapper.find(CompetitionSummary)).toHaveLength(1);
        expect(wrapper.find(CompetitionSummary).props('competition').competition).toBe(competition0);
    });

    it('should call delete once submitted', () => {
        const { props, wrapper } = setup();
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(props.delete.mock.calls.length).toBe(1);
    });
});