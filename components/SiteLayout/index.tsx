import Header from "@components/Header";
import { IBM_Plex_Sans } from "@next/font/google";
import React from "react";


const ibm_plex_sans = IBM_Plex_Sans({ weight: ['100', '200', '300', '400', '500', '600', '700'], variable: '--font-ibm', });

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className={`contents ${ibm_plex_sans.variable} font-ibm`}>
        <Header/>
        {
            children
        }
    </div>
};

export default SiteLayout;