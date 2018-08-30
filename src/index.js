import React from "react";
import ReactDOM from "react-dom";
import Arrow from "./components/Arrow";
import ImageSlider from "./components/ImageSlider";
import Title from "./components/Title";
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
      images: imageResponse.hits.slice(0, 5).map(item => ({
        webformatURL: item.webformatURL,
        id: item.id
      }))
    });
  }

  nextClick() {
    // code to handle next click
    const { activeImageindex } = this.state;
    const lastIndex = this.state.images.length - 1;
    let index = activeImageindex === lastIndex ? 0 : activeImageindex + 1;
    this.setState({
      activeImageindex: index
    });
  }

  previousClick() {
    //code to handle previous click
    const { activeImageindex } = this.state;
    const lastIndex = this.state.images.length - 1;
    let index = activeImageindex === 0 ? lastIndex : activeImageindex - 1;

    this.setState({
      activeImageindex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <Title />
        <ImageSlider
          images={this.state.images}
          currentIndex={this.state.activeImageindex}
        />
        <div className="carousel_actions">
          <Arrow dir="prev" handleClick={this.previousClick} />
          <Arrow dir="next" handleClick={this.nextClick} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carousel />, rootElement);
