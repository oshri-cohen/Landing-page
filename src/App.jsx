// eslint-disable-next-line no-unused-vars
import React from 'react'
import MyBook from "./components/MyBook"
// eslint-disable-next-line no-unused-vars
import BgTexture from "./assets/backg.jpg"


const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat :"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  height:"100vh",
  width:"100%",
  fit:'cover'
};

const App = () => {
  return(
    <div style={BgTextureStyle}  className="w-full h-full flex justify-center items-center">
     <MyBook />
      </div>
  )
}

export default App;