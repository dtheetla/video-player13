import React, { Component } from 'react';

class VideoPlayer13 extends Component {

  render() {
    const {  sources, ...other } = this.props
    return (
      <div>
        <h3> from vide player 13 </h3>
          {/* <video width="320" height="240" controls>
            {this.props.sources.map((src)=>
              <source src={src}></source>
            )}
          </video>         */}
          <video {...other}>
            {this.props.sources.map((src)=>
              <source src={src}></source>
            )}
          </video>          
      </div>
    );
  }
}

VideoPlayer13.defaultProps = {
  sources: [
    'http://techslides.com/demos/sample-videos/small.mp4',
    'http://techslides.com/demos/sample-videos/small.webm'
  ],
  // config: []
}

VideoPlayer13.propTypes = {
  // sources : React.PropTypes.array.isRequired
}

export default VideoPlayer13;
