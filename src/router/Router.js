import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../views/pages/_index";

export default function Router(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </>
    )
}
