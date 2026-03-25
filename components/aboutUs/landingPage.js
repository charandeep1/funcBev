"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LandingAbout = () => {

    const values = [
        {
            text: "Sustainability.",
            color: "text-green-400",
            image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" // Nature/Greenery
        },
        {
            text: "Health.",
            color: "text-blue-400",
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2000&auto=format&fit=crop" // Wellness/Active
        },
        {
            text: "Community.",
            color: "text-yellow-400",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" // People/Together
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, 3000); // Increased to 3 seconds to give the user time to appreciate the background change

        return () => clearInterval(interval);
    }, [values.length]);
    return (
        <div>
            <main
                // Added transition classes so the background fades nicely when it changes
                className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center "
                style={{ backgroundImage: `url('${values[currentIndex].image}')` }}
            >
                {/* Dark Overlay - Keeps white text readable over any image */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000"></div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center text-center">

                    {/* The Flex Container keeping "We Strive for" anchored */}
                    <h1 className="flex flex-col items-center md:justify-center w-full text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">

                        <span className="whitespace-nowrap text-blue-600 gap-10 md:mr-4">
                            mizu
                            <span className="whitespace-nowrap text-blue-600 md:mr-4 text-white">
                                Strives for
                            </span>
                        </span>


                        <span
                            className={`
              w-full md:w-[350px] lg:w-[500px] 
              text-center md:text-left 
              mt-2 md:mt-0 
              ${values[currentIndex].color} 
              transition-colors duration-500
            `}
                        >
                            {values[currentIndex].text}
                        </span>
                    </h1>

                    <p className="mt-6 md:mt-8 text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-200 drop-shadow-md">
                        Join us in making a lasting impact on the world around us.
                    </p>
                </div>
            </main>

        </div>
    )
}

export default LandingAbout;