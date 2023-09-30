import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundary";

// Assets
import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import "./index.css";

// State
import { RecoilRoot } from "recoil";

function App(props) {
  const router = createBrowserRouter([
    {
      element: (
        <Stack id="page" direction="row" flexWrap="nowrap">
          <Outlet />
        </Stack>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          lazy: () => import("./pages/Home"),
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

const theme = createTheme({});
const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
