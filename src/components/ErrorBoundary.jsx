import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  const { fileName, message, lineNumber, columnNumber } = error;
  const at = `${lineNumber} : ${columnNumber}`;
  const file = fileName.split("/").at(-1).split("?")[0];

  return (
    <div className="p-8">
      <h1>{message}</h1>
      <h3 variant="h3">
        at {file} ({at})
      </h3>
      <pre className="pt-2">
        <code>{error.stack}</code>
      </pre>
    </div>
  );
}
