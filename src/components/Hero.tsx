import { useEffect, useRef, useState } from "react";
import { ICONS } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const items = ['React', 'Angular', 'Vue'];

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
            setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    return (
        <div className="relative z-10 text-center text-white mt-20 flex flex-col gap-8">
            <div className="bg-[#ffffff1a] border-2 border-[#ffffff40] px-5 py-[10px] rounded-3xl backdrop-blur-xs text-[#EDE9FE] font-Satoshi-500 uppercase w-fit mx-auto">
                Influencer Marketing, Simplified.
            </div>
            <div>
                <h1 className="font-Satoshi-700 text-[80px] leading-[88px] max-w-[900px] mx-auto">
                    Find Influencers That Drive Real Results.
                </h1>
                <p className="text-[#ffffffbf] font-Satoshi-400 text-[28px] leading-8 max-w-[650px] mx-auto mt-4">
                    Discover data-driven influencer matches, manage campaigns, and measure ROI seamlessly.
                </p>
            </div>

            {/* Search Bar */}
            <div className="bg-[#ffffff0d] border-2 border-[#ffffff40] p-[6px] rounded-[100px] backdrop-blur-xs max-w-[850px] w-full mx-auto flex items-center justify-between mt-6">
                {/* Dropdown */}
                <div ref={dropDownRef} className="relative max-w-[177px] w-full text-white font-Satoshi-400 text-xl leading-6">
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex items-center gap-[6px] p-4 rounded-3xl bg-[#ffffff14] max-w-[177px] w-full"
                    >
                        <img src={ICONS.instagram} alt="instagram-icon" className="size-6" />
                        Instagram
                        <img src={ICONS.downArrow} alt="down-arrow" className="size-6" />
                    </button>
                    {open && (
                        <ul className="absolute top-12 z-50 w-full space-y-1 bg-[#ffffff14] opacity-100 duration-500">
                            {items.map((item, idx) => (
                                <li key={idx} className="rounded-sm bg-[#ffffff14] p-2 hover:bg-sky-500">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <input type="text" className="bg-transparent outline-none text-white max-w-[569px] w-full" placeholder="Search Influencers, Categories, etc.," />

                <div className="bg-purple-gradient size-14 rounded-full flex items-center justify-center">
                    <img src={ICONS.search} alt="search-icon" className="size-6" />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <button className="bg-purple-gradient px-8 py-4 rounded-xl flex items-center gap-[10px] font-Satoshi-500 text-xl leading-6 w-fit mx-auto">
                    Sign up for free
                    <img src={ICONS.rightArrow} alt="right-arrow" className="" />
                </button>
                <Link to={"/"} className="font-Satoshi-700 text-xl leading-6 underline">
                    I’m a Creator
                </Link>
            </div>
        </div>
    );
};

export default Hero;