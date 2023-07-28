import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';

function RandomHeading() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    pickRandomHeading();
  }, []);

  function pickRandomHeading() {
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
    setHeading(headers[Math.floor(Math.random() * headers.length)]);
  }

  return <div className="head-message">{heading}</div>;
}
export default RandomHeading;
