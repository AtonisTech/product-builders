import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo-128.svg";
import orgData from "../../data/organization.json";
import { useRouter } from 'next/router'
import { IoMdMenu } from 'react-icons/io';

interface NavBarProps { 
    className?: string 
    onClickOption? : ()=>void
};
const NavBar: React.FC<NavBarProps> = ({ className, onClickOption }) => {
    return <>
        <nav role="navigation" className={`h-16 justify-end items-center hidden lg:flex ${className}`}>
            {
                orgData.nav.map((tab, ind) => {
                    return <Link key={ind} href={tab.url} onClick={() => { onClickOption && onClickOption() }} className="hover:text-brand-600 transition-colors text-xs font-semibold tracking-[1px] leading-5 uppercase p-5 bg-white w-full lg:w-fit">{tab.label}</Link>
                })
            }
            <Link href={orgData.deticatedAction.url} onClick={() => { onClickOption && onClickOption() }} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block lg:ml-3 w-full lg:w-fit">
                <span className="absolute top-0 right-0 group-hover:left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full group-hover:opacity-90"></span>
                <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">{orgData.deticatedAction.label}</span>
            </Link>
        </nav>
    </>
};

type HeaderProps = {
    onlyLogoOnHeader?:boolean;
}

const Header: React.FC<HeaderProps> = ({ onlyLogoOnHeader }) => {

    const [showNavOptions, setShowNavOptions] = useState(false);

    const router = useRouter();
    const showNav = router.pathname === "/";

    return (
        <header className={`nav`}>
            {
                !showNav && <div className=" fixed left-0 top-0 right-auto bottom-auto z-[9000] w-full h-[3px] bg-brand-600 origin-[0%_50%]"></div>
            }
            <div className={`container ${!showNav && 'flex justify-center' }`}>
                <Link href="/" className="flex h-16 items-center relative float-left">
                    <Image src={logo} alt={"company-name"} className="mr-1" height={32} width={32} ></Image>
                    <div className="text-xl justify-center items-center font-semibold text-brand-600 tracking-tight">
                        APP MAKER
                    </div>
                </Link>
                {
                    showNav && <NavBar />
                }
                {
                    showNav && <div className="select-text block lg:hidden bg-white text-brand-600 mr-[-25px] relative float-right p-4 text-2xl cursor-pointer" onClick={()=>setShowNavOptions(showNavOptions?false:true)}>
                        <IoMdMenu />
                    </div>
                }
            </div>
            {
                showNav && showNavOptions && <div className=" h-[1000px] block lg:hidden bg-scroll absolute overflow-hidden top-full left-0 right-0 w-full">
                    <NavBar className="!flex !flex-col !h-auto text-center" onClickOption={()=>setShowNavOptions(false)}/>
                </div>
            }
        </header>
    );
};

export default Header;