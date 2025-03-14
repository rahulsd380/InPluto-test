import { useState } from "react";
import Container from "./Container";

const FeaturesTab = () => {
    const [activeTab, setActiveTab] = useState("AI-Powered Search");
    const tabButtons = [
        "AI-Powered Search",
        "Deep Analytics",
        "Campaign Management",
        "Global Database",
        "Competitor Analysis"
    ];

    return (
        <div className="bg-white pt-9 z-20">
            <Container>
                <div className="border border-[#CAD5E2] rounded-[99px] p-4 flex items-center justify-between gap-3">
                    {
                        tabButtons.map(btn =>
                            <button key={btn} onClick={() => setActiveTab(btn)} className={`cursor-pointer hover:bg-[#CAD5E2]/40 transition duration-500 rounded-[100px] px-[18px] py-3 font-Satoshi-500 text-xl leading-6 border-2 ${activeTab === btn ? "text-[#314158] border-[#314158]" : "text-[#62748E] border-white"}`}>{btn}</button>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default FeaturesTab;