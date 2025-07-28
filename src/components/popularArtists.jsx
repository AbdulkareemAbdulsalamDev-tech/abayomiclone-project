import React from "react";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="artist-card">
        <img src={this.props.image} alt={this.props.name} className="artist-img" width="100px" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default class PopularArtists extends React.Component {
  render() {
    const artists = [
      { image: "https://i.scdn.co/image/ab67616100005174b4e44d0f4e3e47af2cf06f3f", name: "Burna Boy" },
      { image: "https://i.scdn.co/image/ab67616100005174118de2c3241db238c807e9b3", name: "Asake" },
      { image: "https://i.scdn.co/image/ab67616100005174e6ef803356b45ee5a9fa7a8a", name: "Wizkid" },
      { image: "https://i.scdn.co/image/ab6761610000517468619b502a99da8341f45670", name: "Seyi Vibez" }
    ];
    return (
      <div className="section">
        <h1>Popular artists</h1>
        <div className="grid-row2">
          {artists.map((artist, i) => (
            <ArtistCard key={i} {...artist} />
          ))}
        </div>
      </div>
    );
  }
}