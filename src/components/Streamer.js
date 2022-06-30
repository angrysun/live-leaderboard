import { useState, useEffect } from "react";
import Influencer from "./Influencer";

export default function Streamer() {
  const [streamers, setStreamers] = useState([])

  useEffect(() => {
    getStreamer();
  }, []);

  const getStreamer = () => {
    fetch('https://webcdn.17app.co/campaign/pretest/data.json', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setStreamers(data);
      })
  }

  const influencer = streamers.map(streamer => (
    <Influencer
      key={streamer.userID}
      displayName=(streamer.displayName)
      picture={streamer.picture}
      score={streamer.score}
    />
  ))

  return (
    <div>
      <div>

      </div>
    </div>
  )
}
