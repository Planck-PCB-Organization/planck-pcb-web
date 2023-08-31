import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const App = () => {
    // const [showVideo, setShowVideo] = useState(true);

    // const handleVideoEnd = () => {
    //     setShowVideo(false);
    //     console.log(showVideo);
    //     // Video bittiğinde yapılacak işlemler
    // };

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                // <>
                //     {showVideo ? (
                //         <VideoComponent onVideoEnd={handleVideoEnd} />
                //     ) : (
                        <Layout>
                            <LandingPage />
                        </Layout>
                //     )}
                // </>
            ),
        },
    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
