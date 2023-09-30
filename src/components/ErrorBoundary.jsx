import React from "react";
import { useRouteError } from "react-router-dom";

import { Typography } from "@mui/material";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  const { fileName, message, lineNumber, columnNumber } = error;
  const at = `${lineNumber} : ${columnNumber}`;
  const file = fileName.split("/").at(-1).split("?")[0];

  return (
    <div className="p-8">
      <Typography variant="display">{message}</Typography>
      <Typography variant="h3">
        at {file} ({at})
      </Typography>
      <pre className="pt-2">
        <code>{error.stack}</code>
      </pre>
    </div>
  );
}
