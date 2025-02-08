import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MealsByCategory from "./pages/MealsByCategory/MealsByCategory";
import MealDetails from "./pages/MealDetails/MealDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:name", element: <MealsByCategory /> },
      { path: "mealdetails/:id", element: <MealDetails /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
