import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import FriendDetails from "../Pages/FriendDetails";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import ErrorPage from "../Pages/ErrorPage";

export  const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/friendDetails',
                Component: FriendDetails
            },
            {
                path: '/timeline',
                Component: Timeline
            },
            {
                path: '/stats',
                Component: Stats
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
]);