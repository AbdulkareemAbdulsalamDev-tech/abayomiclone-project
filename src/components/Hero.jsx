import React from "react";

class SongCard extends React.Component {
  render() {
    return (
      <div className="song-card">
        <img src={this.props.image} alt={this.props.title} width="170" />
        <p className="song-title">{this.props.title}</p>
        <p className="song-artist">{this.props.artist}</p>
      </div>
    );
  }
}

export default class TrendingSongs extends React.Component {
  render() {
    const songs = [
      {
        image: "https://i.scdn.co/image/ab67616d00001e0247a88194aa04e74e49b5191b",
        title: "One Condition",
        artist: "DJ Tunz, Wizkid, FOLA"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e02db8582d51a88b1f54d9fd315",
        title: "BADMAN GANGSTA",
        artist: "Asake, Tiakola"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e029ec1528294afb5f3f8725067",
        title: "DYNAMITE",
        artist: "Tyla, Wizkid"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e02236a5e5addc316ea271c3e6f",
        title: "Hot Body",
        artist: "Ayra Starr"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e028028a7b8c9fce086d4a47ba7",
        title: "Which One",
        artist: "Drake, Central Cee"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e02784f451a4ba072a200c119db",
        title: "Dopamine",
        artist: "Fireboy DML"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e02f24aaeedb80ba95038beeec9",
        title: "Life",
        artist: "Balloranking"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e0245c8c3f1c6ac47b81f2781fa",
        title: "Dead Flowers",
        artist: "Llona"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e02b5e775abf422a0a9d0af05a8",
        title: "Love",
        artist: "Burnaboy"
      },
      {
        image: "https://i.scdn.co/image/ab67616d00001e0288b898f331680dc60deae36d",
        title: "IAlone",
        artist: "BNXN"
      },
    ];
    return (
      <div className="section">
        <h1>Trending songs</h1>
        <div className="grid-row">
          {songs.map((song, i) => (
            <SongCard key={i} {...song} />
          ))}
        </div>
      </div>
    );
  }
}
