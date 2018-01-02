import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Auth from './../Auth';
import Header from './../../main/Header';
import Footer from './../../main/Footer';
import Login from './../../users/Login';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Auth />);

describe('auth component', () => {
    it('should render self', () => {
        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find(Header).exists()).toBe(true);
        expect(wrapper.find(Login).exists()).toBe(true);
        expect(wrapper.find(Footer).exists()).toBe(true);
    });
});
