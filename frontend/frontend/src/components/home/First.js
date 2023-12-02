import React, { useState, useEffect } from 'react';
import world from "../images/world.png"

const Typewriter = () => {
  const [text, setText] = useState('');
  const originalText = "CloudNine, the best flight services!";

  useEffect(() => {
    let index = 0;
    let isTyping = true;

    const intervalId = setInterval(() => {
      setText((prevText) => {
        let newText;

        if (isTyping) {
          newText = originalText.substring(0, index);
          index++;

          if (index > originalText.length) {
            isTyping = false;
            index = originalText.length;
          }
        } else {
          newText = originalText.substring(0, index);
          index--;

          if (index === 0) {
            isTyping = true;
          }
        }

        return newText;
      });
    }, 150); // Adjust the interval (milliseconds) for the desired speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {text}
      <br className="hidden lg:inline-block" /> {/* Preserve the line break style */}
    </h1>
  );
};

const First = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Typewriter />
          <p className="mb-8 leading-relaxed">
            We offer the best flight services accross Canada. 
            Always fly with us for your safety and peace of mind.
            Enjoy the best fair and no delayed flights.
            Executive experience and great customer services
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={world} />
        </div>
      </div>
    </section>
  );
};

export default First;