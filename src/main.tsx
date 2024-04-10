import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout/AppLayout.tsx';
import { Home } from './pages/index.ts';
import Auth from './pages/Auth/Auth.tsx';

import './global/style.css';

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />,
        index: true,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // {
            //     path: '/:id',
            //     element: <Detail />,
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

    // </React.StrictMode>
);
