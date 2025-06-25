import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import './assets/style.css';
import TicketsList from './assets/components/TicketsList';
import { HashRouter, Route, Routes } from "react-router-dom";
import App from './App'; 


render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </HashRouter>,
    document.getElementById("tickets-root")
);

