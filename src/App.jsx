import React from 'react';
import "./index.css";
import Home from './components/Home';
import Emoji from './components/Emoji';

function App() {
  return (
    <>
    <div className="min-h-screen w-full relative bg-white">
      <div
      className="absolute inset-0 z-0"
      style={{
        background: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(70, 130, 180, 0.5),
            transparent 70%
          )
        `,
        filter: "blur(80px)",
        backgroundRepeat: "no-repeat",
      }}
      />
      {/* Your Content/Components */}
      <Home />
    </div>
    </>
  )
}

export default App
