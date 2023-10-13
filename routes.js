import { Outlet, createBrowserRouter } from "react-router-dom";

import Header from './src/components/Header';
import Error from './src/components/Error';
import Body from './src/components/Body';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import AboutClass from "./src/components/AboutClass";


const AppComponent = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <AboutClass/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
])