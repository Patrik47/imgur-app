import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Message from "./components/Message";

const Routes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/gallery" element={<Message />} />
            </Routes>
        </>
    );
}

export default Routes;