import { Link } from "react-router-dom";
import Container from "./Container";
import { IMAGES } from "../assets";
import Hero from "./Hero";

const Navbar = () => {
    const navlinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/" },
        { label: "Contact", path: "/" },
    ];

    return (
        <div
            className="bg-[#06050B] h-screen relative">
            <img src={IMAGES.gradientBg} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat h-screen" />

            <Container>
                <div className="relative z-10 flex items-center justify-between py-6">
                    <Link to={"/"} className="font-Satoshi-900 text-white">
                        Inpluto
                    </Link>

                    <div className="flex items-center gap-5">
                        {navlinks.map((link, index) => (
                            <Link to={link.path} key={index} className="text-white font-Satoshi-500">
                                {link.label}
                            </Link>
                        ))}
                        <button className="border border-white px-4 py-[10px] rounded-lg text-white font-Satoshi-500 cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <Hero/>
            </Container>
        </div>
    );
};

export default Navbar;
