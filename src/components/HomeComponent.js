import React, { Component } from "react";
import Cardhome from "./HomecardComponent";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from "reactstrap";

const Home = () => (
  <div>
    <MyCarousel />
    <Cardhome />
  </div>
);

const items = [
  {
    id: 1,
    altText: "",
    caption: "",
    src: "https://genhq.com/wp-content/uploads/2018/02/CharitibleGiving.gif",
  },
  {
    id: 2,
    altText: "",
    caption:
      "We are the Non-Profitable Fund raising Organization, You can ask for Help here ! ",

    src:
      "https://kinsta.com/wp-content/uploads/2018/05/stripe-donate-button-1-1.png",
  },
  {
    id: 3,
    altText: "",
    caption: "Now Donate through various Mode of Payments at your Choice !",

    src:
      "https://kinsta.com/wp-content/uploads/2014/04/bitcoin-donate-button.png",
  },
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="my-Carousel"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <a href="https://www.tsn.ca/soccer" target="_blank">
            <img
              className="my-CarouselImage d-block w-100 h-auto"
              src={item.src}
              alt={item.altText}
            />
          </a>
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Home;
