import { Outlet, createBrowserRouter } from "react-router-dom";

import Header from './src/components/Header';
import Error from './src/components/Error';
import Body from './src/components/Body';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import AboutClass from "./src/components/AboutClass";
import Cart from "./src/components/Cart";
import ThemeContext from "./src/utils/ThemeContext";
import { THEME } from "./src/utils/constants";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";

const AppComponent = () => {
    const [theme, setTheme] = useState(THEME.LIGHT);
    return (
        <div className={`${theme}`}>
            <Provider store={appStore}>
                <ThemeContext.Provider value={{
                    theme,
                    setTheme
                }}>
                        <Header/>
                        <Outlet/>
                </ThemeContext.Provider>
            </Provider>
        </div>
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
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])