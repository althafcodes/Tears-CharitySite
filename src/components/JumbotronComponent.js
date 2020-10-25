import React from "react";
import { Jumbotron } from "reactstrap";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>TEARS</h1>
              <p className="h5">
                “ It's not how much we give but how much love we put into
                giving. ” <br />
                <a style={{ marginLeft: "21rem" }}></a>- Mother Teresa <br />{" "}
                <br />“ You have not lived today until you have done something
                for someone who can never repay you. ” <br />
                <a style={{ marginLeft: "24rem" }}></a>- John Bunyan
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
