import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <>
      {item.map((each) => {
        return (
          <div className="col-12 col-md-4 mt-2 mb-3">
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
                <Button className="col-12 bg-warning">Donate</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}

class Homecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          id: 0,
          name: "education icon",
          img:
            "data:image/png;base64,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",
          title: "Education",
          txt:
            "The students who like to study with poor economic status seeking for help",
        },
        {
          id: 1,
          name: "med icon",
          img:
            "data:image/png;base64,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",
          title: "Medical",
          txt: "The people who needs Medical Treatment seeking for help",
        },
        {
          id: 2,
          name: "child icon",
          img:
            "https://www.pngitem.com/pimgs/m/46-460661_transparent-child-icon-png-save-the-children-icons.png",
          title: "Child",
          txt: "Orphan and Abudant Children seeking for help",
        },
        {
          id: 3,
          name: "animal icon",
          img: "https://image.flaticon.com/icons/png/512/53/53249.png",
          title: "Animal",
          txt:
            "Animals and Pets that are Endangered and Abundant seeking for help ",
        },
        {
          id: 4,
          name: "women icon",
          img: "https://education4change.org/images/img/cd_icons_1.png",
          title: "Women",
          txt: "Widowed womens , Orphaned womens seeking for help",
        },
        {
          id: 5,
          name: "orph icon",
          img: "https://static.thenounproject.com/png/642282-200.png",
          title: "Orphanaged Homes",
          txt:
            "Older People who are apart from their families seeking for help",
        },
        {
          id: 6,
          name: "tech icon",
          img:
            "https://cdn2.iconfinder.com/data/icons/essential-web-3/50/innovation-gear-lightbulb-idea-technology-512.png",
          title: "Tech, Sci and Bussiness",
          txt: "The People who are starting career seeking help",
        },
        {
          id: 7,
          name: "Natural Disasters icon",
          img:
            "data:image/png;base64,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",
          title: "Natural Disasters",
          txt:
            "Disasters like Floods, Cyclones, EarthQuakes creates loss in India, Help the Victims",
        },
        {
          id: 8,
          name: "covid icon",
          img:
            "data:image/png;base64,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",
          title: "Covid 19",
          txt: "Covid 19 is a deadly Virus, Help the govt to raise funds",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div id="text-heading">
          <p className="text-center">Donation Categories</p>
        </div>
        <div className="row">
          <RenderCard item={this.state.Data} />
        </div>
      </div>
    );
  }
}

export default Homecard;
