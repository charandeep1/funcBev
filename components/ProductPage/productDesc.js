import Image from 'next/image';
import Link from 'next/link';


// components
import ProductSpecsCard from './productSpecCard';
import FeaturesGrid from './features';

const ProductHero = () => {
    return (
        <>
            <section className="my-30">

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0f172a] leading-[1.15] mb-6 tracking-tight">
                            Elevate your drinking <br className="hidden xl:block" /> experience
                        </h1>

                        <p className="text-base md:text-lg text-[#1e293b] leading-relaxed max-w-xl mb-8 font-medium">
                            Elevate your drinking experience with the Tower v1, customize your water with flavors, vitamins and other enhancements.
                            <br /> Enjoy still water or sparkling water, set your preferred
                            temperature, mix flavors, and enhance your beverage for a customized
                            refreshment—every time.
                        </p>

                    </div>

                    {/* Right Column: Product Image */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
                        {/* Constraining the image wrapper so it scales proportionally */}
                        <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] aspect-[3/4] md:aspect-[4/5]">
                            <Image
                                src="/images/machine1.png" // <-- Replace with your actual image path in the public folder
                                alt="Sparkling and Flavored Water Dispenser"
                                fill
                                className="object-contain object-bottom lg:object-right-bottom"
                                priority={true} // High priority so it loads instantly above the fold
                            />
                        </div>
                    </div>


                </div>
            </section>
            <section>
                <FeaturesGrid />
            </section>


            <section className='flex justify-center'>
                <ProductSpecsCard />

            </section>

        </>


    );
}

export default ProductHero;