import React from 'react';

class RadarChartView extends React.Component {
    static defaultProps = {
        data: [
            {x: 100, y: 20},
            {x: 170, y: 60},
            {x: 170, y: 140},
            {x: 100, y: 180},
            {x: 31, y: 140},
            {x: 31, y: 60}
        ]
    }
    static propTypes = {
        data: React.PropTypes.object
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg id="radar" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="transparent" stroke="grey" />
                <circle cx="100" cy="100" r="1" stroke="blue" />

                {this.props.data.map((point, id) =>
                    <circle key={id} cx={point.x} cy={point.y} r="1" stroke="red" />
                )}

                <path d="M100 20 L 100 20 L 170 60 L 170 140 L 100 180 L 31 140 L 31 60 L 100 20" fill="rgba(128,198,252,0.5)" />
            </svg>
        );
    }
}

export default RadarChartView;
