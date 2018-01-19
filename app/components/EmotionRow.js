import PropTypes from 'prop-types';
import React from 'react';
import RadarChartView from './RadarChartView';

// {sadness, joy, fear, disgust, anger}
class EmotionRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.act} = {this.props.scene}</p>
                Sadness: {this.props.emotion.sadness}<br />
                Joy: {this.props.emotion.joy}<br />
                Fear: {this.props.emotion.fear}<br />
                Disgust: {this.props.emotion.disgust}<br />
                Anger: {this.props.emotion.anger}
                <RadarChartView />
            </div>
        );
    }
}

EmotionRow.propTypes = {
    act: PropTypes.string,
    scene: PropTypes.string,
    emotion: PropTypes.object
};

export default EmotionRow;
