import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Results from "./pages/Results";
import UserPage from "./pages/UserPage";
import Signup from "./pages/Signup";
import Recipe from "./pages/Recipe";
import NotFound from "./ui/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [
      { path: "recipe/:recipeId", element: <Recipe /> },
      { path: "signin", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "resetpassword", element: <ResetPassword /> },
      { path: "user/:usernameSlug", element: <UserPage /> },
      { path: "results", element: <Results /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
