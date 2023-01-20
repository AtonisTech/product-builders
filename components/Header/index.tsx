import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo-128.svg";

type HeaderProps = {
    onlyLogoOnHeader?:boolean;
}

const Header: React.FC<HeaderProps> = ({ onlyLogoOnHeader }) => {

    return (
        <header className={`nav`}>
            <div className="container">
                <Link href="/">
                    <Image src={logo} alt={"company-name"}></Image>
                    <div>
                        Sample
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;