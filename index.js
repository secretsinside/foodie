import ReactDom from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Contact from './src/components/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './src/components/Error';


const AppComponent = () => {
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent/>,
        errorElement: <Error/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])

const root = ReactDom.createRoot(document.getElementById('root-container'));

root.render(<RouterProvider router={appRoutes}/>);