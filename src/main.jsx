import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AppLayout, { About } from "./App"; // import AppLayout from App.js

import Contact from "./components/Contact";
import NotFound from "./components/404NotFund";
import Blog from "./components/Blog";
import ResturantMenuPage from "./components/ResturantMenuPage";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <>
                  <AppLayout />
                  <h1>Loading...</h1>
                </>
              }
            >
              <About />
            </Suspense>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resturant/:id" element={<ResturantMenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
