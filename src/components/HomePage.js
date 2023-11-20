import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
        <img
          src="data:image/png;base64,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"
          alt="logo"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#111112" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
