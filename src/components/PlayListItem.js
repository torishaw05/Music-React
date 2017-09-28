import React, {Component} from 'react';

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
<div className='list'>

    Name : {this.props.songs.userName}
      <br></br>
    Artist: {this.props.songs.songArtist}
      <br></br>
   Song : {this.props.songs.songTitle}
     <br></br>
   Notes : {this.props.songs.songNotes}

</div>
    )
  }
}
export default PlayListItem;
