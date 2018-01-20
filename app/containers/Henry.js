import React from 'react';
import * as Actions from '../actions';
import EmotionRow from '../components/EmotionRow';
import RadarChartView from '../components/RadarChartView';

class Henry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chapters: []};
    }

    componentDidMount() {
        fetch('/api/henry-emotional-content')
            .then(response => {
                return response.json();
            }).then(data => {
                data.map((datum) => {
                    const centerPoint = {x: 100, y: 100};
                    const increment = 72;
                    const points = [];
                    let angle = 0;
                    let path = '';
                    for (const emotion in datum.emotion) {
                        if (datum.emotion.hasOwnProperty(emotion)) {
                            const height = (80 * datum.emotion[emotion]);
                            const point = {x: 100, y: 100 - height};
                            const rotatedPoint = this.rotatePoint(centerPoint, angle, point);
                            angle += increment;
                            points.push(rotatedPoint);
                        }
                    }
                    path += `M${points[0].x} ${points[0].y} `;
                    points.forEach((point) => {
                        path += `L ${point.x} ${point.y} `;
                    });
                    path += `L ${points[0].x} ${points[0].y}`;
                    datum.points = points;
                    datum.path = path;
                    return datum;
                });
                this.setState({
                    chapters: data
                });
                Actions.emotionDataLoadedAction(data);
            });
    }

    rotatePoint(c, angle, p) {
        const radians = (Math.PI / 180) * angle;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const nx = (cos * (p.x - c.x)) + (sin * (p.y - c.y)) + c.x;
        const ny = (cos * (p.y - c.y)) - (sin * (p.x - c.x)) + c.y;
        return {x: nx, y: ny};
    }

    render() {
        return (
        <div>
        <h1>Henry IV</h1>
        {this.state.chapters.map((chapter, id) =>
            <div>
                <EmotionRow key={id} act={chapter.act} scene={chapter.scene} emotion={chapter.emotion} />
                <br /><br />
                <RadarChartView key={id + 1000} width={300} points={chapter.points} path={chapter.path} />
            </div>
        )}
        </div>
        );
    }
}

export default Henry;
