import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewCounter from "./components/NewCounter.jsx";
import Counter from "./components/counter.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Counter />,
              },
              {
                path: "newCounter",
                element: <NewCounter />,
               
              },
        ]
    },
 
]);
createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
