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
      picture={streamer.picture}
      name={streamer.displayName}
      score={streamer.score}
    />
  ))

  return (
    <div className="container">
      {influencer}
    </div>
  )
}
