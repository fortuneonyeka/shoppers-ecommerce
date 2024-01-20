import "./App.css";
import { productData } from "./api/Api";
import Footer from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
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
      // {
      //   path:"/shop",
      //   element: <Shop />
      // },
      // {
      //   path:"/blog",
      //   element: <Blog />
      // }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
