import React from "react";
import ReactDOM from "react-dom";
import Arrow from "./components/Arrow";
import ImageSlider from "./components/ImageSlider";
import "./styles.css";

const API =
  "https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeImageindex: 0
    };
    this.nextClick = this.nextClick.bind(this);
    this.previousClick = this.previousClick.bind(this);
  }
  async componentDidMount() {
    let response = await fetch(API);
    let imageResponse = await response.json();
    this.setState({
      images: imageResponse.hits.map(item => ({
        webformatURL: item.webformatURL,
        id: item.id
      }))
    });
  }

  nextClick() {
    // code to handle next click
  }
  previousClick() {
    //code to handle previous click
  }

  render() {
    return (
      <div className="carousel">
        <Title />
        <ImageSlider images={this.state.images} />
        <div className="carousel_arrows">
          <Arrow dir="prev" handleClick={this.previousClick} />
          <Arrow dir="next" handleClick={this.nextClick} />
        </div>
      </div>
    );
  }
}

const Title = () => {
  return <h1>Carousel Test</h1>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Carousel />, rootElement);
