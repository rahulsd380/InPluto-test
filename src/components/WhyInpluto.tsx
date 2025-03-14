import { IMAGES } from "../assets";
import Container from "./Container";

const WhyInpluto = () => {
    return (
        <div className="bg-white pt-8">
            <Container>
                <h1 className="text-[#364153] font-Satoshi-500 text-xl leading-6 text-center">Why you must choose Inpluto</h1>
                <div className="flex items-center justify-between gap-[96px] mt-[60px] pb-7">
                    <img src={IMAGES.dummyLogo} alt="" />
                    <img src={IMAGES.dummyLogo} alt="" />
                    <img src={IMAGES.dummyLogo} alt="" />
                    <img src={IMAGES.dummyLogo} alt="" />
                    <img src={IMAGES.dummyLogo} alt="" />
                    <img src={IMAGES.dummyLogo} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default WhyInpluto;