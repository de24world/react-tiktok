import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
            <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
      data-video-id="6718335390845095173"
    >
      <section>
        <a
          target="_blank"
          title="@scout2015"
          href="https://www.tiktok.com/@scout2015"
          >@scout2015</a
        >
        <p>
          Scramble up ur name & I’ll try to guess it😍❤️
          <a
            title="foryoupage"
            target="_blank"
            href="https://www.tiktok.com/tag/foryoupage"
            >#foryoupage</a
          >
          <a
            title="petsoftiktok"
            target="_blank"
            href="https://www.tiktok.com/tag/petsoftiktok"
            >#petsoftiktok</a
          >
          <a
            title="aesthetic"
            target="_blank"
            href="https://www.tiktok.com/tag/aesthetic"
            >#aesthetic</a
          >
        </p>
        <a
          target="_blank"
          title="♬ original sound - 𝐇𝐚𝐰𝐚𝐢𝐢𓆉"
          href="https://www.tiktok.com/music/original-sound-6689804660171082501"
          >♬ original sound - 𝐇𝐚𝐰𝐚𝐢𝐢𓆉</a
        >
      </section>
    </blockquote>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
