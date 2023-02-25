import ContactForm from "@components/ContactForm";
import orgData from "../../data/organization.json";

type FooterProps = {
    onlyLogoOnFooter?: boolean;
}

const Footer: React.FC<FooterProps> = ({ onlyLogoOnFooter }) => {

    return (
        <footer id="hire-us" className="relative flex flex-row justify-center flex-wrap items-start content-start overflow-visible bg-accent-600 delay-200 ease-in pt-24">
            <ContactForm/>
            <div className="w-full mt-20 pt-10 pb-5 border-t border-accent-200">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="text-white text-centre opacity-30">© 2023 {orgData.name}. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;