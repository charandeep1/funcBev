import Link from 'next/link';

export default function ProductSpecsCard() {
    const checkFeatures = [
        "Filtered still + sparkling water",
        "Ambient water",
        "Hot water",
        "Select carbonation level",
        "Enhancements",
        "Flavor mixing",
        "Touchless dispensing"
    ];

    return (
        // Outer wrapper creates the vibrant gradient border effect
        <div className="relative my-15 p-[3px] rounded-3xl bg-gradient-to-tr from-[#93bdfe] via-[#e3f1d0] to-[#32428e] w-full max-w-md mx-auto shadow-xl">

            {/* Inner white card */}
            <div className="bg-white rounded-[21px] p-8 h-full flex flex-col">

                {/* Header: Logo and Badge */}
                <div className="flex justify-between items-start mb-6">
                    <div className="text-2xl font-bold tracking-tight text-blue-600 lowercase">
                        Mizu<span className="text-xs align-top">®</span>
                    </div>

                    <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        Specifications
                    </span>
                </div>

                {/* Title & Description */}
                {/* <div className="mb-6">
                    <h3 className="text-xl font-bold text-black mb-1">The Tower v1</h3>
                    <p className="text-black text-sm font-medium">
                        Smart sparkling and flavored water dispenser.
                    </p>
                </div> */}

                {/* Core Stats (Replaces the large Price section from the SaaS card) */}
                <div className="flex flex-col gap-4 mb-6">

                    {/* Mix Limit */}
                    <div className="flex justify-between items-start">
                        <span className=" text-sm font-medium pr-4">
                            Total Flavors & Enhancements you can mix
                        </span>
                        <div className="text-right shrink-0">
                            <span className="text-xl font-extrabold text-black tracking-tight block">up to 5</span>
                            <span className="text-[12px] font-medium block mt-0.5 ">
                                (3 flavors & 2 enhancements)
                            </span>
                        </div>
                    </div>

                    {/* Slots Limit */}
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium">Total slots for Flavors</span>
                        <span className="text-xl font-extrabold text-black tracking-tight">up to 8</span>
                    </div>



                </div>


                {/* Features List (Using the SaaS green check and dotted underlines) */}
                <ul className="flex flex-col gap-4 mt-auto">
                    {checkFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            {/* SaaS-style Green Checkmark */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 text-emerald-500 shrink-0"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {/* Dotted underline text */}
                            <span className="text-sm font-medium underline decoration-dotted underline-offset-4">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
                {/* CTA Button */}
                <Link
                    href="/quote"
                    className="flex justify-center w-full bg-[#1c1c1c] hover:bg-black text-white font-semibold py-3.5 rounded-xl mt-8 transition-colors duration-200"
                >
                    Get a Quote
                </Link>


            </div>
        </div>
    );
}