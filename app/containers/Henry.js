import React from 'react';
import * as Actions from '../actions';
import EmotionRow from '../components/EmotionRow';

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
                this.setState({chapters: data});
                Actions.emotionDataLoadedAction(data);
            });
    }

    render() {
        return (
        <div>
        <h1>Henry IV</h1>
        {this.state.chapters.map((chapter, id) =>
            <EmotionRow key={id} act={chapter.act} scene={chapter.scene} emotion={chapter.emotion} />
        )}
        </div>
        );
    }
}

export default Henry;
