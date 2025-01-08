import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import InfiniteScrollLocal from './pages/booking/Car/InfiniteScroll';
import LazyInfiniteScroll from './pages/booking/Car/Lazyload';
const Index = lazy(() => import('./pages/Index'));
const Notfound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/Account/Login'));
const Cars = lazy(() => import('./pages/booking/Car/Cars'));
const Home = lazy(() => import('./pages/Account/Home'));
const Summary = lazy(() => import('./pages/booking/summary'));



function App() {
  return (
    // <div className='App'>
    //   <h1>Hello World</h1>
    //   <h2>ENV Variable : {process.env.REACT_APP_API_KEY}</h2>
    // </div>
    <Suspense fallback='Loading...'>
      <Routes>
        <Route path="/" element={<Index />} >
          <Route path="/home" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/infinite" element={<InfiniteScrollLocal />} />
          <Route path="/lazy" element={<LazyInfiniteScroll />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
