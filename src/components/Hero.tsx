import { useEffect, useRef, useState } from "react";
import { ICONS, IMAGES } from "../assets";

const Hero = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['React', 'Angular', 'Vue'];

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    return (
        <div className="bg-[#06050B]">
            <div className="bg-[#ffffff1a] border-2 border-[#ffffff40] px-5 py-[10px] rounded-3xl backdrop-blur-xs text-[#EDE9FE] font-Satoshi-500 uppercase w-fit mx-auto">
                Influencer Marketing, Simplified.
            </div>
            <h1 className="font-Satoshi-700 text-[80px] leading-[88px] text-white text-center max-w-[900px] mx-auto">Find Influencers That Drive Real Results.</h1>
            <p className="text-[#ffffffbf] font-Satoshi-400 text-[28px] leading-8 max-w-[650px] mx-auto text-center">Discover data-driven influencer matches, manage campaigns, and measure ROI seamlessly.</p>
            <div className="bg-[#ffffff0d] border-2 border-[#ffffff40] p-[6px] rounded-[100px] backdrop-blur-xs text-[#EDE9FE] font-Satoshi-500 max-w-[850px] w-full mx-auto flex items-center justify-between">
                {/* Dropdown */}
                <div ref={dropDownRef} className="relative max-w-[177px] w-full text-white font-Satoshi-400 text-xl leading-6">
                    <button onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-[6px] p-4 rounded-3xl bg-[#ffffff14] max-w-[177px] w-full">
                        <img src={ICONS.instagram} alt="instagram-icon" className="size-6" />
                        Instagram
                        <img src={ICONS.downArrow} alt="down-arrow" className="size-6" />
                    </button>
                    <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 bg-[#ffffff14]`}>
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                className={`rounded-sm bg-[#ffffff14] p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-sky-500`}
                                style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)` }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <input type="text" />

                <div className="bg-purple-gradient size-10 rounded-full flex items-center justify-center">
                    <img src={ICONS.search} alt="" />
                </div>
            </div>

            <img src={IMAGES.gradientBg} alt="" className="w-full top-0 bottom-0" />
        </div>
    );
};

export default Hero;