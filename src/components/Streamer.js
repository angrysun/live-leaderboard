import { useState, useEffect } from "react";

export default function Streamer() {
  const [streamer, setStreamer] = useState([])

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
        setStreamer(data);
      })
  }
}
