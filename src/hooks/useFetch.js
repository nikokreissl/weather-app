import React from "react";
import { useEffect, useState } from "react";

export default function useFetch() {
  const [weather, setWeather] = useState({});

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setInterval(fetchWeather, 5000);
  }, []);

  return { weather };
}
