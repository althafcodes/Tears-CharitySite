import React, { useState } from "react";
import { Button, Media } from "reactstrap";

const imgStyle = {
  maxHeight: 200,
  maxWidth: 180,
  marginRight: 20,
  borderRadius: 5,
};

const Owner = () => {
  return (
    <>
      <Media>
        <Media left href="#">
          <Media
            style={imgStyle}
            object
            src="/assets/images/grey.jpeg"
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading style={{ fontSize: 33 }}>
            Developer Details
          </Media>
          <p style={{ fontSize: 17 }}>
            This is Althaf, A Passive guy. And Working to become a FULL STACK
            DEVELOPER. I describe myself as a normal guy who work and try to
            achieve his goals. And this is a project is not created for fun,
            Actually i'm trying to host this on web. This web app is created
            with the hope of try to WIPE THE TEARS of people who needs help for
            their better living. So i name the site as "Tears". OfCourse
            everyone help each other whenever they feel to, But What i'm trying
            to achieve through this web app is to create a huge circle to get
            helped. PEACE, Thank You for Coming here !
          </p>
        </Media>
      </Media>
      <div className="row mr-5">
        <a
          target="_blank"
          href="https://www.facebook.com/althaf.sk.637"
          className=" mr-3"
        >
          Facebook
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/i_am__althaf/"
          className=" mr-3"
        >
          Instagram
        </a>
        <a
          target="_blank"
          href="mailto:iamalthaf003@gmail.com"
          className=" mr-3"
        >
          Gmail
        </a>
      </div>
    </>
  );
};

export default Owner;
