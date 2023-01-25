import React from "react";

type HexBgSectionProps = {
    children:React.ReactNode;
};

const HexBgSection: React.FC<HexBgSectionProps> = ({children}) => {
    return <div className="overflow-hidden">
        {
            children
        }
    </div>
};

export default HexBgSection;