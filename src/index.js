import React from "react";
import ReactDOM from "react-dom";
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

  render() {
    return (
      <div className="carousel">
        <Header />
        <ImageSlider images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

const Footer = () => {
  return (
    <div className="carousel_arrows">
      <Arrow dir="left" />
      <Arrow dir="right" />
    </div>
  );
};

const Arrow = ({ dir }) => {
  return <input type="button" value={dir} />;
};

const ImageSlider = ({ images }) => {
  return (
    <ul>
      <li />
    </ul>
  );
};

const Header = () => {
  return <h1>Carousel Test</h1>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Carousel />, rootElement);
