import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import WeatherReviewCard from "../components/WeatherReviewCard";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({
    location: {
      name: "New York",
      country: "United States of America",
      region: "New York",
      timezone_id: "America/New_York",
      localtime: "2022-01-04 02:53",
    },
    current: {
      observation_time: "07:53 AM",
      temperature: -5,
      weather_code: 113,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
      ],
      weather_descriptions: ["Clear"],
      wind_speed: 24,
      wind_degree: 330,
      wind_dir: "NNW",
      pressure: 1026,
      precip: 0,
      humidity: 59,
      cloudcover: 0,
      feelslike: -11,
      uv_index: 1,
      visibility: 16,
      is_day: "no",
    },
  });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "http://api.weatherstack.com/current?access_key=3353cc40870d09e2268cee7111ca2ba1&query=New%20York"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box sx={{ px: 5, mt: 4 }}>
        <WeatherReviewCard
          icon={items.current.weather_icons}
          country={items.location.country}
          time={items.location.localtime}
          weather_descriptions={items.current.weather_descriptions}
          temperature={items.current.temperature}
        />
      </Box>
    );
  }
};

export default Home;
