import React from 'react';
import './Header.css';

class RandomHeading extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: ''
    };
  }

  componentDidMount() {
    this.randomHeading();
  }

  randomHeading = () => {
    const headers = [
      'I gave my heart, she gave me a meme.',
      'It\'s pronounced "Imgur."',
      "Wait, it's all memes? Always has been.",
      'Stay true to you.',
      'Actions speak louder than words.',
      'Practice makes perfect.',
      'No pain, no gain.',
      'Well began is half done.',
      "All's well that ends well.",
      "On the internet, nobody knows you're a dog."
    ];
    this.setState({
      heading: headers[Math.floor(Math.random() * headers.length)]
    });
  };

  render() {
    return <div className="head-message">{this.state.heading}</div>;
  }
}

export default RandomHeading;