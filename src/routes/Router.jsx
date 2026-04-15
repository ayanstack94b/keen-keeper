import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import FriendDetails from "../Pages/FriendDetails";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import ErrorPage from "../Pages/ErrorPage";

const friendsPromise = async () => {
    const res = await fetch('/friends.json')
    const data = await res.json();
    return data
}


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: friendsPromise
            },
            {
                path: '/friendDetails/:id',
                Component: FriendDetails,
                loader: async ({ params }) => {
                    const res = await fetch('/friends.json');
                    const data = await res.json();

                    const friend = data.find(
                        f => f.id === parseInt(params.id)
                    );

                    return friend;
                }
            },
            {
                path: 'timeline',
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