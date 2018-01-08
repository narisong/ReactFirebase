import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from './../users/Profile';

const LOGIN_REGISTER = 'Login/Register';
const HOME = 'Home';

export class HeaderComponent extends Component {
    render() {
        const userElement = this.props.user.signedIn ?
            // TODO: Call Logout component
            (<Profile />) :
            (<a href="/auth" className="btn btn-outline-info" role="button">{LOGIN_REGISTER}</a>);

        const navCategoryListId = 'navCategoryList';

        return (
            <div className="container">
                <header className="navbar navbar-expand-md navbar-dark bg-dark" role="banner">
                    <a href="/" className="navbar-brand">
                        <img src="/favicon.ico" alt="Ga" width="36" height="36" />
                        <span>{HOME}</span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${navCategoryListId}`}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id={navCategoryListId}>
                        <ul className="navbar-nav mr-auto">
                            {
                                this.props.categoryList.map(category => (
                                    <li className="nav-item" key={category.name}>
                                        <a className="nav-link active" href={category.link}>{category.name}</a>
                                    </li>))
                            }
                        </ul>
                        {userElement}
                    </div>
                </header>
            </div>
        );
    }
}

// TODO: create a class for category, and use it as isRequired
HeaderComponent.propTypes = {
    user: PropTypes.object.isRequired,
    categoryList: PropTypes.arrayOf(PropTypes.object),
};

HeaderComponent.defaultProps = {
    categoryList: [
        {
            name: 'NFL',
            link: '/nfl',
        },
        {
            name: 'EPL',
            link: '/epl',
        },
    ],
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(HeaderComponent);
