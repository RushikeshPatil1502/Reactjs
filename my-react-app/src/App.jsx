/* eslint-disable no-unused-vars */
import Cards from "./Components/Cards"
import React from "react"


function App() {
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      <Cards
        title="Beautiful Sunset"
        description="Enjoy the view of this amazing sunset captured from the hills."
        image="https://source.unsplash.com/random/400x300/?sunset"
        buttonText="Learn More"
      />
      <Cards
        title="Serene Forest"
        description="Take a deep breath and immerse yourself in the beauty of nature."
        image="https://source.unsplash.com/random/400x300/?forest"
        buttonText="Explore"
      />
    </div>
    </>
}

export default App
