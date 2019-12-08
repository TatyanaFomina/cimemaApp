import React from "react";
import '../assets/style/Footer.css';

export const Footer = () => (
    <footer>
      <section className="section-footer">
      <div className="container">
        <div className="grid">
          <div className="grid-item  width-1-2-md width-1-4-lg">
            <section className="footer-info">
                <h2 className="section-title">Your friendly cinema</h2>
              <p className="section-description">
                eusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
          </div>
          <div className="grid-item width-1-2-md width-1-4-lg">
            <section className="section-subscribe">
              <h4 className="section-title">Subscribe</h4>
              <div className="form-control">
                <input type="text" className="input-footer" />
                <span className="icon-fl">
                  <i className="icon-shape_5" aria-hidden="true"></i>
                </span>
              </div>
              <p className="section-description">
                eusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
          </div>
          <div className="grid-item width-1-2-md width-1-4-lg">
            <section className="section-explore">
              <h4 className="section-title">Learn more</h4>
              <div className="grid">
                <div className="grid-item  grid-reset">
                  <ul className="list list-footer">
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Jobs & Volunteering</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="grid-item width-1-2-md width-1-4-lg">
            <section className="section-copyright">
              <p className="design section-description">
                Created with <i className="icon-heart" aria-hidden="true"></i> by
                <span className="black-word">themecurve</span>, exclusive for
                kreativeshowcase
              </p>
              <p className="copyright">© 2019 FomTV. All Rights Reserved.</p>
            </section>
          </div>
        </div>
      </div>
      </section>
    </footer>
);