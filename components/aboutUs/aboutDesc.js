import React from 'react';
import Image from 'next/image';

export default function AboutDesc() {
    const values = [
        {
            title: "Sustainability by the glass",
            description: "When you use our system, you're saving more than a plastic bottle—you're shutting off the oil needed to create it and keeping the air free from emissions that come from shipping it. Our customers have saved nearly 1 billion bottles to-date.",
            image: "/images/sustainability.jpg" // Replace with your local image paths
        },
        {
            title: "Health & Wellness First",
            description: "Advanced multi-stage filtration and precision carbonation deliver perfect hydration on-demand. Monitor system health and track your daily water intake in real-time, making healthy choices simple and refreshing.",
            image: "/images/health.jpg"
        },
        {
            title: "Empowering Collective Change",
            description: "Join a growing community of businesses and individuals who have already committed to a greener future. Your team's water break becomes a shared moment of purpose, contributing directly to a cleaner world.",
            image: "/images/community.jpg"
        },
    ];

    return (
        // Main container with generous padding and centered max-width
        <main className="w-full min-h-screen bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">

                {values.map((val, index) => {

                    const isEven = index % 2 === 0;

                    return (
                        <section
                            key={index}
                            className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >

                            {/* Image Container 
                  'rounded-full' on a rectangular container creates the pill shape
              */}
                            <div className="relative w-full md:w-1/2 h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-sm shrink-0">
                                <Image
                                    src={val.image}
                                    alt={val.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col w-full md:w-1/2 px-4 md:px-8 lg:px-12 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                    {val.title}
                                </h2>
                                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                    {val.description}
                                </p>
                            </div>

                        </section>
                    );
                })}

            </div>
        </main>
    );
}