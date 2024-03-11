import "./App.css";
import { productData } from "./api/Api";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { ToastContainer} from 'react-toastify';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { About } from "./pages/About";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element: <Home />,
        loader: productData,
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/productDetails/:id",
        element: <ProductDetails />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"*",
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
