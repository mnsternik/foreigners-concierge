import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Root from "./pages/Root/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Companies from "./pages/Companies/Companies";
import Foreigners from "./pages/Foreigners/Foreigners";
import ContactForm from "./components/ContactForm/ContactForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/companies",
          element: <Companies />,
        },
        {
          path: "/foreigners",
          element: <Foreigners />,
        },
        {
          path: "/contact",
          element: <ContactForm />,
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Layout></Layout>
    </RouterProvider>
  );
}

export default App;
