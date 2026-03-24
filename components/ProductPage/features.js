import React from 'react';
import Image from 'next/image';
// 1. Data configuration for the features
const FEATURES_DATA = [
  {
    id: 'hydration',
    icon: <ThunderIcon />,
    title: 'Functional Energy, Instantly Delivered.',
    description: (
      <>
        Design your perfect drink — still or sparkling, precisely chilled, with custom flavors and functional boosts.
      </>
    ),
  },
  {
    id: 'sustainable',
    icon: <LeafRecycleIcon />,
    title: 'Track Your Environmental Impact.',
    description: 'Eliminate waste and lower your footprint—save thousands of bottles every year while delivering sustainable hydration for your team.',
  },
  {
    id: 'Pure Hydration',
    icon: <StarIcon />,
    title: 'Hydration Amplified, Perfectly Refined.',
    description: 'Explore various flavors and boosts—mix, match, and craft a drink that’s uniquely yours, from classic favorites to bold new blends.',
  },
  {
    id: 'cost-effective',
    icon: <CostDownIcon />,
    title: 'Seamless Convenience, Optimized for Efficiency',
    description: 'Skip the restocking—ditch single-use bottles and cans for a smarter, cost-efficient way to keep your team refreshed.',
  }
];

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">

              {/* Icon Container with subtle light blue background */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#e8f1fa] mb-6 text-[#1e40af]">
                {feature.icon}
              </div>

              {/* Title (whitespace-pre-line respects the \n in the data for perfect wrapping) */}
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-4 whitespace-pre-line leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-[#334155] leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;

// --- SVG Icon Components ---

function ThunderIcon() {
  return (
    <Image
      src="/images/thunder.png"
      width={45}
      height={45}
      alt="Energy"
      // fill={true}
      className="object-contain"
      priority={true}
    />
  );
}

function LeafRecycleIcon() {
  return (
    <Image
      src="/images/impact.png"
      width={65}
      height={65}
      alt="Energy"
      // fill={true}
      className="object-contain"
      priority={true}
    />
  );
}

function StarIcon() {
  return (
    <Image
      src="/images/water.png"
      width={45}
      height={45}
      alt="Energy"
      // fill={true}
      className="object-contain"
      priority={true}
    />
  );
}

function CostDownIcon() {
  return (
    <Image
      src="/images/costEffective.png"
      width={45}
      height={45}
      alt="Energy"
      // fill={true}
      className="object-contain"
      priority={true}
    />
  );
}