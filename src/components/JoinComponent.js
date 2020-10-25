import React, { Component } from "react";
import Jumbo from "./JumbotronComponent";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
} from "reactstrap";

function RenderJoin({ item }) {
  return (
    <>
      {item.map((each) => {
        return (
          <div className="col-12 col-md-5 mt-2 mb-5 pl-5 offset-md-1">
            <Card className="RenderCard-main-Card ">
              <CardImg
                top
                width="100%"
                src={each.img}
                alt={each.name}
                className="RenderCard-CardImg"
              />
              <CardBody>
                <CardTitle
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                >
                  {each.title}
                </CardTitle>
                <CardText>{each.txt}</CardText>
                <Button className="col-12 bg-warning">{each.tag}</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          id: 0,
          name: "live icon",
          img:
            "https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-live-icon-design-template-vector-isolated-illustration-png-image_1874482.jpg",
          title: "Live campaigns",
          txt: "Join in Our live campaigns, Listen to the Top Social Helpers",
          tag: "Watch Live",
        },
        {
          id: 1,
          name: "volunteer icon",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT5A6Tbh8Q26PYdPkhzbp-uH8pOhBZkTakcA&usqp=CAU",
          title: "Volunteer Services",
          txt: "You Can join our Local volunteer services",
          tag: "Join as Volunteer",
        },
        {
          id: 2,
          name: "ngo icon",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFDhbHxN_XPaagh-YX4CVHjRU9l6yArwX-Bg&usqp=CAU",
          title: "Partner NGOs",
          txt: "Get invloved with our Partner NGOs",
          tag: "Get Involved",
        },
        {
          id: 4,
          name: "clean icon",
          img:
            "https://www.pngitem.com/pimgs/m/148-1489818_transparent-cleaning-icon-png-keep-city-clean-logo.png",
          title: "Clean City",
          txt:
            "You Can Join the Clean-City program with our local volunteers and help us",
          tag: "Clean",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Jumbo />
        <div className="container">
          <div id="text-heading">
            <p className="text-center">Change Begins With You</p>
          </div>
          <div className="row ">
            <RenderJoin item={this.state.Data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
