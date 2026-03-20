import Image from 'next/image';
import Link from 'next/link';

// Data configuration for the features
const FEATURES_DATA = [
    {
        id: 'hydration',
        title: 'Effortless Hydration',
        description: 'Eliminate the need for bottle restocking and storage. Provide employees and guests with seamless access to still and sparkling water—anytime.',
        buttonText: 'The Tower 1.0',
        buttonLink: '/tower-1',
        imageSrc: '/images/water-bottle.png', // Replace with your image path in the public folder
    },

    {
        id: 'filtered',
        title: 'Advanced Water Filtration',
        description: 'Our state-of-the-art filtration system ensures every drop meets the highest standards of purity, delivering consistently clean and great-tasting water.',
        buttonText: 'Mizu Water Filtration',
        buttonLink: '/filtration',
        imageSrc: '/images/filteration.png', // Replace with your image path
    },
    {
        id: 'ingredients',
        title: 'Health-Conscious Ingredients',
        description: 'Offer a curated selection of refreshing, zero- and low-sugar flavors, crafted with high-quality ingredients for a healthier hydration experience.',
        buttonText: 'View Flavors and Enhancements',
        buttonLink: '/flavors',
        imageSrc: '/images/healthy.png', // Replace with your image path
    }
];

const WhyChooseUs = () => {
    return (
        // Background color matches the light green from the screenshot
        <section className="w-full bg-[#e3eed8] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c4d2e] mb-16 tracking-tight">
                    Why Choose Mizu for Your Workplace Hydration Needs?
                </h2>

                {/* Responsive Grid: 1 column on mobile, 3 on medium screens and up */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">

                    {FEATURES_DATA.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center text-center h-full">

                            {/* Circular Image */}
                            <div className="relative w-56 h-56 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden mb-8 shadow-md">
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.title.replace('\n', ' ')}
                                    fill={true}

                                    className="object-cover"
                                    // Using a gray fallback background in case image isn't loaded yet
                                    style={{ backgroundColor: '#d1d5db' }}
                                />
                            </div>

                            {/* Title with whitespace-pre-line to respect the \n line breaks in the data */}
                            <h3 className="text-2xl font-bold text-[#1c4d2e] mb-4 whitespace-pre-line leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-[#1c4d2e] leading-relaxed mb-8 px-2 md:px-0">
                                {feature.description}
                            </p>

                            {/* Action Button - mt-auto pushes it to the bottom so buttons align across columns */}
                            {/* <div className="mt-auto w-full px-4">
                                <Link
                                    href={feature.buttonLink}
                                    className="block w-full bg-[#275338] hover:bg-[#1b3d27] text-white text-sm font-semibold py-3.5 px-6 rounded-full transition-colors duration-200"
                                >
                                    {feature.buttonText}
                                </Link>
                            </div> */}

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;