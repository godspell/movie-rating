import React from 'react'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import { AppProvider } from './components/context'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App