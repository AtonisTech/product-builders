import Footer from "@components/Footer";
import Header from "@components/Header";
import { IBM_Plex_Sans } from "@next/font/google";
import { Pathway_Gothic_One } from "@next/font/google";
import React from "react";


const ibm_plex_sans = IBM_Plex_Sans({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets:['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext' , 'vietnamese'], variable: '--font-ibm', });
const pathway_gothic_one = Pathway_Gothic_One({ weight: ['400'], subsets: ["latin" , "latin-ext"], variable: '--font-pathway' });
const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className={`contents ${ibm_plex_sans.variable} ${pathway_gothic_one.variable} font-ibm`}>
        <Header/>
        {
            children
        }
        <Footer/>
    </div>
};

export default SiteLayout;