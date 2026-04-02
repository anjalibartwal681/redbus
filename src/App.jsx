// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SeatSelection from "./pages/SeatSelection";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet";

import BusList from "./pages/BusList";


function App() {
  return (
    <BrowserRouter>
  <Helmet>
  <title>Book Bus Tickets Online | Best Prices</title>
  <meta name="description" content="Book bus tickets online at the best prices. Compare routes, timings, and fares. Fast, secure, and easy bus booking across India." />
  <meta name="keywords" content="bus booking India, online bus tickets, cheap bus tickets, sleeper bus booking, AC bus booking" />
  <meta name="author" content="Anjali Bartwal" />
</Helmet>
      <Routes>  
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
              <Route path="/bus-list" element={<BusList />} />
          <Route path="/seat/:id" element={<SeatSelection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;