import React, { Suspense, lazy } from "react";
import Static from "./Static";

const DyanmicFile = lazy(() => import("./Dynamic"));

function Home() {
  return (
    <div style={{ color: "red" }}>
      <div>Home</div>
      <Static />
      <Suspense fallback={<div>Loading...</div>}>
        <DyanmicFile />
      </Suspense>
    </div>
  );
}

export default Home;
