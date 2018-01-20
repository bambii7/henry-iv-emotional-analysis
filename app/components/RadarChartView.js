import React from 'react';

class RadarChartView extends React.Component {
    static defaultProps = {
        width: 100,
        path: '',
        points: [
            {x: 100, y: 20},
            {x: 170, y: 60},
            {x: 170, y: 140},
            {x: 100, y: 180},
            {x: 31, y: 140},
            {x: 31, y: 60}
        ]
    }

    static propTypes = {
        points: React.PropTypes.array,
        width: React.PropTypes.number,
        path: React.PropTypes.string
    }

    render() {
        return (
            <svg id="radar" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={this.props.width}>
                <circle cx="100" cy="100" r="80" fill="transparent" stroke="grey" />
                <circle cx="100" cy="100" r="1" stroke="blue" />

                {this.props.points.map((point, id) =>
                    <circle key={id} cx={point.x} cy={point.y} r="1" stroke="red" />
                )}
                <path d={this.props.path} fill="rgba(128,198,252,0.5)" />

            </svg>
        );
    }
}

export default RadarChartView;
