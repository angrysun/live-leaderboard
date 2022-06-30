import { useState, useEffect } from "react";

export default function Streamer() {
  const [streamer, setStreamer] = useState([])

  useEffect(() => {
    getStreamer();
  }, []);

  const getStreamer = () => {

  }
}
