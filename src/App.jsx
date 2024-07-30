import React from "react";
import Qualifications from "./components/Qualifications";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950">
        <div class="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(50,50,100,0.6),rgba(0,0,0,0))]"></div>
      <div class="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(30,30,60,0.7),rgba(0,0,0,0))]"></div>
</div>

      </div>
      <div className="container mx-auto px-10">
        <Qualifications />
      </div>
    </div>
  );
}

export default App;
