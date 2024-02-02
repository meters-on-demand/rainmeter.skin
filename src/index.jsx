import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import ErrorBoundary from "./components/ErrorBoundary";

// Assets
// import "@fontsource/roboto";
// import "@fontsource/poppins";
import "@fontsource/roboto-mono";
import "@fontsource-variable/baloo-da-2";
import "@fontsource/quicksand";
import "@fontsource/inter";

import "./index.css";

// State
import { RecoilRoot } from "recoil";
import Navigation from "./components/Navigation";
import { CssBaseline, CssVarsProvider, Sheet } from "@mui/joy";
import { extendTheme } from "@mui/joy";

const theme = extendTheme({});

function App(props) {
  const router = createBrowserRouter([
    {
      element: (
        <Sheet className="w-screen h-screen overflow-hidden flex flex-column flex-nowrap">
          <Navigation />
          <Outlet />
        </Sheet>
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

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <CssVarsProvider theme={theme} defaultMode="dark">
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </RecoilRoot>
  </React.StrictMode>
);
