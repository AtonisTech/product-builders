import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo-128.svg";
import orgData from "../../data/organization.json";
import { useRouter } from 'next/router'

const NavBar = () => {
    return <nav role="navigation" className="flex h-16 justify-end items-center">
        {
            orgData.nav.map((tab,ind)=>{
                return <Link key={ind} href={tab.url} className="hover:text-brand-600 transition-colors text-xs font-semibold tracking-[1px] uppercase p-5">{tab.label}</Link>
            })
        }
        <Link href={orgData.deticatedAction.url} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block ml-3">
            <span className="absolute top-0 right-0 group-hover:left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full group-hover:opacity-90"></span>
            <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">{orgData.deticatedAction.label}</span>
        </Link>
    </nav>
};

type HeaderProps = {
    onlyLogoOnHeader?:boolean;
}

const Header: React.FC<HeaderProps> = ({ onlyLogoOnHeader }) => {

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
            </div>
        </header>
    );
};

export default Header;