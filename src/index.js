import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyCUom5bc9wf83a1G1bbmMjkrH_D4x1-ozA';


class App extends Component {

    constructor(props){
      super(props);

      this.state = { videos: [],
                     selectedVideo: null};


      YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
        console.log(videos)
        this.setState({ videos : videos,
            selectedVideo: videos[0]});
    });
        
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList  videos={this.state.videos} />
            </div>
        );

    }
}

ReactDOM.render(<App />,document.querySelector('.container'));
