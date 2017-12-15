import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Competition from './Competition';
import CompetitionListAdd from './CompetitionListAdd';

class CompetitionList extends Component {
    render() {
        return (
            [
                <h1>Competition Listify</h1>,
                <div>
                    {
                        this.props.competitions.map(competition => (
                            <Competition competition={competition} key={competition.id} />
                        ))
                    },
                </div>,
                <CompetitionListAdd />,
            ]
        );
    }
}

CompetitionList.propTypes = {
    competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(CompetitionList);
