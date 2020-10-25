import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4  col-sm-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-4  col-sm-3">
            <h5>Partners</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/partner1">GOONJ org</Link>
              </li>
              <li>
                <Link to="/partner2">Child In Need</Link>
              </li>
              <li>
                <Link to="/partner3">Apollo Hospitals</Link>
              </li>
              <li>
                <Link to="/partner4">Palium Ind</Link>
              </li>
            </ul>
          </div>

          <div className="col-7 col-sm-3">
            <h5>Our Address</h5>
            <address>
              121, GTR Road,
              <br />
              Adyar, Chennai,
              <br />
              India
              <br />
              <i className="fa fa-phone fa-lg"></i>: +91 912 3456 789
              <br />
              <i className="fa fa-fax fa-lg"></i>: +91 998 7654 321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:tears@fund.org">tears@fund.org</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Tears Org</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
