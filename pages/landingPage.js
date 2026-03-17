//components
import Navbar from '../components/navbar';
import Image from "next/image";

import bgImage from '../public/images/bg.jpeg'


import BubbleBackground from '../components/BubbleBackground';
const Homepage = () => {
    return (
        // 'relative' keeps the absolute-positioned image bound to this container
        // 'min-h-screen' ensures the page is at least the height of the browser window


        < main className="relative min-h-screen" >

            <BubbleBackground bubbleCount={20} />
            < Image
                src="/images/bg.jpeg"
                alt="Landing page background"
                fill
                className="object-cover -z-10" /* -z-10 pushes it behind your content */
                quality={100}
                priority /* Tells Next.js to load this immediately (Great for SEO/Performance) */
            />





            <div className="flex flex-col items-center justify-center pt-32">
                <p className="font-mono text-xl text-black font-bold">Changing your gulp to slurp</p>
                <h1 className="font-mono text-8xl text-black font-bold p-2 ">
                    funkBev

                </h1>
            </div>

        </main >
    );
};

export default Homepage; 