import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  const about = {
    imageUrl: assets.about,
    summary: `Lorem ipsum,
     dolor sit amet consectetur adipisicing elit. 
     Velit obcaecati eos minima adipisci recusandae inventore
      voluptatum necessitatibus nesciunt laudantium? Quam asperiores 
      obcaecati autem molestiae iste quos officia amet vel alias!`,
    fullText: `Lorem ipsum, dolor sit amet consectetur adipisicing 
    elit. Velit obcaecati eos minima adipisci recusandae inventore 
    voluptatum necessitatibus nesciunt laudantium? Quam asperiores obcaecati autem 
    molestiae iste quos officia amet vel alias!
    Lorem ipsum, dolor sit amet consectetur adipisicing 
    elit. Velit obcaecati eos minima adipisci recusandae inventore 
    voluptatum necessitatibus nesciunt laudantium? Quam asperiores obcaecati autem 
    molestiae iste quos officia amet vel alias!
    Lorem ipsum, dolor sit amet consectetur adipisicing 
    elit. Velit obcaecati eos minima adipisci recusandae inventore 
    voluptatum necessitatibus nesciunt laudantium? Quam asperiores obcaecati autem 
    molestiae iste quos officia amet vel alias!
    Lorem ipsum, dolor sit amet consectetur adipisicing 
    elit. Velit obcaecati eos minima adipisci recusandae inventore 
    voluptatum necessitatibus nesciunt laudantium? Quam asperiores obcaecati autem 
    molestiae iste quos officia amet vel alias!
    `,
  };

  return (
    <div className="relative">
         <Navbar/>
    <div className="flex flex-col items-center px-4 md:px-20 pb-20">
       
      <h1 className="text-4xl md:text-5xl font-light text-center mt-10 mb-8 text-primary">
        About Me
      </h1>
      <div className="w-full lg:w-[50%] text-white rounded-md p-6 md:p-10 mb-10 bg-primary">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            className="w-100 h-100 rounded-md object-cover"
            src={about.imageUrl}
            alt=""
          />
          <p className="text-lg">{about.summary}</p>
        </div>
      </div>
      <div className="max-w-3xl text-justify space-y-2 text-gray-800 rich-text">
        {about.fullText}

      </div>
<Footer/>
    </div>
    </div>

    
  );
  
}

export default About;
