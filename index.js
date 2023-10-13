import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { appRoutes } from './routes';


const root = ReactDom.createRoot(document.getElementById('root-container'));

root.render(<RouterProvider router={appRoutes}/>);