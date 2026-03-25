"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LandingAbout = () => {

    const values = [
        {
            text: "Sustainability.",
            color: "text-green-400",
            image: "/images/ocean_aboutUs.jpg"
        },
        {
            text: "Health.",
            color: "text-blue-400",
            image: "/images/health_about.jpeg" // Wellness/Active
        },
        {
            text: "Community.",
            color: "text-yellow-400",
            image: "/images/community_abouts.jpeg" // People/Together
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [values.length]);
    return (
        <div>
            <main

                className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center "

            >
                {values.map((val, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
                            }`}
                    >
                        <Image
                            src={val.image}
                            alt={`${val.text} background`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                ))}
                {/* Dark Overlay - Keeps white text readable over any image */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000"></div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center text-center">

                    {/* The Flex Container keeping "We Strive for" anchored */}
                    <h1 className="flex flex-col items-center md:justify-center w-full text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">

                        <span className="whitespace-nowrap text-shadow-lg text-blue-600 gap-10 md:mr-4 my-4">
                            mizu  <span className="whitespace-nowrap text-blue-600 md:mr-4 text-white">
                                strives for
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