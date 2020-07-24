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


/*



https://github.com/szdc/tiktok-api
https://stackoverflow.com/questions/44109326/how-to-work-with-json-in-react-js
https://pusher.com/tutorials/consume-restful-api-react
https://scotch.io/courses/10-react-challenges-beginner/fetch-and-display-from-an-api
https://www.youtube.com/watch?v=c6t3bW7kx6E


function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}


*/
