import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    };

    this.handleNameChange= this.handleNameChange.bind(this);
    this.handleArtistChange= this.handleArtistChange.bind(this);
    this.handleSongChange= this.handleSongChange.bind(this);
    this.handleNotesChange= this.handleNotesChange.bind(this);
    this.addToList= this.addToList.bind(this);

  }
  handleNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }
  handleArtistChange(event) {
    this.setState({
      songArtist: event.target.value
    })
  }
  handleSongChange(event){
    this.setState({
      songTitle: event.target.value
    })
  }
  handleNotesChange(event) {
    this.setState ({
      songNotes: event.target.value
    })
  }
  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response, 'tori');

  }).catch(err => {
    console.log(err);
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});

  }
  render() {
    return (
      <form onSubmit={this.addToList}>
      <label htmlFor='formGroupInput'>Name: </label>
      <br></br>

      <input onChange={this.handleNameChange} value={this.state.userName} type='text' placeholder='Your Name' />

      <br></br>
      <br></br>
      <br></br>



      <label htmlFor='formGroupInput2'>Artist: </label>
      <br></br>

      <input onChange={this.handleArtistChange} value={this.state.songArtist} type='text' placeholder='Artist Name' />
      <br></br>
      <br></br>
      <br></br>



      <label htmlFor='formGroupInput3'> Song Title: </label>
      <br></br>

      <input onChange={this.handleSongChange} value={this.state.songTitle} type='text' placeholder='Enter Song' />
      <br></br>
      <br></br>
      <br></br>


      <label htmlFor='textarea'> Notes About Song : </label>
<br></br>


      <textarea onChange={this.handleNotesChange} value={this.state.songNotes} rows='4'></textarea>
       <br></br>

       <br></br>

      </form>

    )
  }
}
export default PlayListForm;
