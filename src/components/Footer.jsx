import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
     <section>
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
          </div>
          <div>
            <h3>Communities</h3>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
          </div>
          <div>
            <h3>Useful Link</h3>
            <p>Support</p>
            <p>Free Mobile App</p>
            <p>Popular by Country</p>
          </div>
          <div>
            <h3>Spotify Plan</h3>
            <p>Premium Individual</p>
            <p>Premium Duo</p>
            <p>Premium Family</p>
            <p>Premium Student</p>
            <p>Spotify Free</p>
          </div>
        </div>
      </footer>
      <hr />
      <p className="copyright">© 2025 Abdulsalam Spotify Clone</p>
     </section>
    );
  }
}