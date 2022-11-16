import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { useState } from 'react';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Error404 } from 'pages/Error404';

import { Layout } from 'components/Layout/Layout';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
