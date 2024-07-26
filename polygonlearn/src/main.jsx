import React from 'react'
import App from './App.jsx'
import './index.css'
import {PageNotFound} from './components/PageNotFound'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
)
