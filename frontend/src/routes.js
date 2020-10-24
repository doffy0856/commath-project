import React from "react";
import Main from "./views/Main";
import Chapter1 from "./views/Chapter1";
import Chapter2 from "./views/Chapter2";
import Chapter3 from "./views/Chapter3";
import Chapter4 from "./views/Chapter4";
import Chapter5 from "./views/Chapter5";
import Chapter6 from "./views/Chapter6";

const routes = [{
        path: "/",
        element: < Main / > ,
    },
    {
        path: "/commath-project",
        element: < Main / > ,
    },
    {
        path: "Chapter1",
        element: < Chapter1 / > ,
    },
    {
        path: "Chapter2",
        element: < Chapter2 / > ,
    },
    {
        path: "Chapter3",
        element: < Chapter3 / > ,
    },
    {
        path: "Chapter4",
        element: < Chapter4 / > ,
    },
    {
        path: "Chapter5",
        element: < Chapter5 / > ,
    },
    {
        path: "Chapter6",
        element: < Chapter6 / > ,
    },
];

export default routes;