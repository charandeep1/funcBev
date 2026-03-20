
'use client';
// components import
import Navbar from '@/components/navbar';
import BubbleBackground from '@/components/BubbleBackground';
import WhyChooseUs from '@/components/whyChooseUs';


import { useRef, useState, useEffect } from 'react';
import Image from 'next/image'; // Import for Next.js image optimization
import { motion, useScroll, useTransform } from 'framer-motion';


export default function LandingHero() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Safely check window size on the client side to make it responsive
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track the scroll progress of our 200vh container (0 = top, 1 = bottom)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Animation Timelines ---

    // 1. Intro Text: Fades and moves up twice as fast (0% to 10% scroll)
    const textOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.1, 1], [0, -50, -50]);
    // Prevent ghost text from blocking clicks
    const textPointerEvents = useTransform(scrollYProgress, [0, 0.09, 0.1], ["auto", "auto", "none"]);

    // 2. Machine Image: Slides from right to center (0.05% to 25% of scroll)
    const imageX = useTransform(
        scrollYProgress,
        [0.05, 0.25, 1],
        isMobile ? ['0vw', '0vw', '0vw'] : ['25vw', '0vw', '0vw']
    );
    // On mobile, rises from the bottom (25vh to 0vh)
    const imageY = useTransform(
        scrollYProgress,
        [0.05, 0.25, 1],
        isMobile ? ['25vh', '0vh', '0vh'] : ['0vh', '0vh', '0vh']
    );
    // Slight scale up for dramatic effect as it centers
    const imageScale = useTransform(scrollYProgress, [0.05, 0.25, 1], [1, 1.2, 1.2]);

    // 3. Feature Bubbles Fade In: Triggered after image centers (30% to 45% scroll)
    const featuresOpacity = useTransform(scrollYProgress, [0.3, 0.45, 1], [0, 1, 1]);

    // 4. Arrows "Draw" themselves: Slightly overlapping the bubble fade (35% to 50% scroll)
    // This calculates a value from 0 to 1 for the pathLength CSS property
    const arrowDraw = useTransform(scrollYProgress, [0.35, 0.5, 1], [0, 1, 1]);

    // 5. Scroll Indicator fades out immediately (0% to 5% scroll)
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 0]);

    return (
        /* Outer container creates the scrolling track */
        <div>
            <section ref={containerRef} className="relative h-[200vh] bg-[#f8fbff]">


                {/* Sticky inner container holds the layout in the viewport */}
                <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-0">
                    {/* Intro Text Content */}
                    <motion.div
                        className="absolute top-[15%] md:top-auto md:left-[15%] w-full md:w-[40%] flex flex-col gap-4 md:gap-6 text-center md:text-left z-20"
                        style={{ opacity: textOpacity, y: textY, pointerEvents: textPointerEvents }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                            Changing <br className="hidden md:block" /> the way <br className="hidden md:block" /> we consume <span className="text-blue-600">water.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-md mx-auto md:mx-0">
                            A bubbly, bottleless office water dispenser for any commercial space. Hydrate happy.
                        </p>
                    </motion.div>

                    {/* Machine Image, SVG Arrows, and Feature Bubbles */}
                    <motion.div
                        className="absolute flex flex-col items-center justify-center w-full md:w-auto"
                        style={{ x: imageX, y: imageY, scale: imageScale }}
                    >
                        {/* SVG Arrows Overlay - sits over the machine for the start point, hidden on mobile */}
                        <svg
                            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10 hidden md:block"
                            style={{ zIndex: 10 }} // Sit between machine (z-5) and bubbles (z-20)
                        >
                            <defs>
                                {/* Define the triangular arrowhead marker */}
                                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                                </marker>
                            </defs>

                            {/* Top Left Arrow */}
                            <motion.path
                                d="M 20,100 C -40,80 -100,80 -150,110"
                                fill="transparent" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                style={{ pathLength: arrowDraw }}
                            />
                            {/* Bottom Left Arrow */}
                            <motion.path
                                d="M 60,300 C 0,320 -80,350 -140,360"
                                fill="transparent" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                style={{ pathLength: arrowDraw }}
                            />
                            {/* Top Right Arrow */}
                            <motion.path
                                d="M 230,120 C 280,100 320,110 380,120"
                                fill="transparent" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                style={{ pathLength: arrowDraw }}
                            />
                            {/* Bottom Right Arrow */}
                            <motion.path
                                d="M 180,310 C 240,330 300,340 370,330"
                                fill="transparent" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                style={{ pathLength: arrowDraw }}
                            />
                        </svg>

                        {/* Machine Container - Now holds the real product image */}
                        <div className="relative z-5 w-48 h-[350px] md:w-64 md:h-[500px] flex items-center justify-center">
                            <Image
                                src="/images/machine2.png" // <--- REPLACE THIS WITH YOUR IMAGE PATH FROM public FOLDER
                                alt="triQ Office Water Dispenser"
                                fill={true} // Fills the relative parent container
                                className="object-contain" // Keeps aspect ratio, scales to fit
                                priority={true} // High priority for LCP
                            />
                        </div>

                        {/* Feature Bubbles - Responsive Positioning */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none z-20" // Sit over everything
                            style={{ opacity: featuresOpacity }}
                        >
                            {/* Top Left: Interactive Screen */}
                            <div className="absolute md:-left-[240px] md:top-[90px] top-0 -left-4 bg-white shadow-xl px-4 py-2 rounded-full border border-blue-100 text-sm font-bold text-blue-900 whitespace-nowrap">
                                Interactive Screen
                            </div>
                            {/* Bottom Left: Zero Waste */}
                            <div className="absolute md:-left-[240px] md:top-[340px] top-1/2 -left-4 bg-white shadow-xl px-4 py-2 rounded-full border border-blue-100 text-sm font-bold text-blue-900 whitespace-nowrap">
                                Zero Waste
                            </div>
                            {/* Top Right: Custom Flavors */}
                            <div className="absolute md:-right-[240px] md:top-[100px] bottom-0 -right-4 bg-white shadow-xl px-4 py-2 rounded-full border border-blue-100 text-sm font-bold text-blue-900 whitespace-nowrap">
                                Custom Flavors
                            </div>
                            {/* Bottom Right: Touchless Dispense */}
                            <div className="absolute md:-right-[240px] md:top-[310px] bottom-1/2 -right-4 bg-white shadow-xl px-4 py-2 rounded-full border border-blue-100 text-sm font-bold text-blue-900 whitespace-nowrap">
                                Touchless Dispense
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
                        style={{ opacity: indicatorOpacity }}
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Scroll</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 animate-bounce" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </motion.div>

                </div>


            </section>
            <section>

                <WhyChooseUs />

            </section>
        </div>

    );
}