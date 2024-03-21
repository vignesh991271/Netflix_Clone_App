import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import { BsArrowLeft } from "react-icons/bs";

function MoviePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      {/* <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
          <h1 className="note">You are in Movies Section!!</h1>
        </div> */}
      <div className="data">
        {/* <h1 className="note">You are in Movies Section</h1> */}
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
}

const Container = styled.div`
.back {
  position: relative;
  padding: 1rem;
  z-index: 1;
  svg {
    font-size: 3rem;
    cursor: pointer;
  }
}
.note{
  text-align: center;
  align-items:center;
  
}
  .data {
    margin-top: 5rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;
