import { ReactNode } from "react";

const Container = ({children} : {children : ReactNode}) => {
    return (
        <div className="max-w-[1300px] mx-auto px5 md:px-8 xl:px-0">
            {children}
        </div>
    );
};

export default Container;