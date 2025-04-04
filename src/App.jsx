import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'

import Home from "./components/Home";
import Todo_list from "./projects/todo_list/Todo_list";
import Blog_app from "./projects/blog_app/Blog_app";
import Expense_tracker from "./projects/expense_tracker/Expense_tracker";
import Find_job from "./projects/find_job/Find_job";
import Product_listing from "./projects/product_listing/Product_listing";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo_list" element={<Todo_list/>}/>
          <Route path="/blog_app" element={<Blog_app/>}/>
          <Route path="/Expense_tracker" element={<Expense_tracker/>}/>
          <Route path="/Find_job" element={<Find_job/>}/>
          <Route path="/Product_listing" element={<Product_listing/>}/>

        </Routes>
      </Router>
    </>
  );
};

export default App;
