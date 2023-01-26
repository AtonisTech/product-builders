import Image from "next/image";
import Link from "next/link";
import React from "react";
import directorData from "../../data/director.json";
import linkedinLogo from "../../public/linkedin.svg";
import {Pathway_Gothic_One} from "@next/font/google";
const alternateFont = Pathway_Gothic_One({ weight: "400", subsets: ['latin' , 'latin-ext'] });
import img1 from "../../public/footer/one.png";
import img2 from "../../public/footer/two.png";
import img3 from "../../public/footer/three.png";
import img4 from "../../public/footer/four.png";

type ContactFormProps = {
}

const ContactForm: React.FC<ContactFormProps> = ({ }) => {

    return (
        <div className="container">
            <div className="flex justify-center">
                <h3 className={`text-white text-5xl font-semibold tracking-tight uppercase ${alternateFont.className}`}>Have a project for us?</h3>
            </div>
            <div className="relative top-0 mx-auto lg:absolute lg:top-20 left-auto right-0 bottom-auto w-64 lg:mr-3.5 flex-col items-center lg:items-start flex mt-2 mb-6 content-start">
                <div>
                    <div className=" relative flex mb-6 flex-col justify-start flex-nowrap items-start">
                        <p className="text-white p-4 self-start rounded-[3px] bg-accent-200">“Hi, I’m Vaibhav (or just &apos;V&apos;). <br /> Are you looking for an experienced development team? <br />Look no further. <br /><span className=" text-sec-brand-600">Contact us today for your</span> <span className="text-sec-brand-600">free consultation worth $900!</span>” </p>
                        <div className=" absolute left-1/2 lg:left-[8%] top-auto right-auto bottom-[-14px] h-6 w-6 mb-0 border-t-[18px] border-r-[16px] border-b border-l-[8px] border-l-accent-600 border-r-accent-600 border-t-accent-200 border-b-black" style={{ borderTopStyle: 'solid',borderBottomStyle: 'none',borderLeftStyle: 'solid'}}></div>
                    </div>
                </div>
                <div className="w-32 h-32 rounded-full overflow-hidden mr-4 mb-2 grow-0 shrink-0 basis-auto" style={{ backgroundPosition: '50% 30%', backgroundSize: '130%', backgroundImage: `url(/social-customer.jpg)`}}></div>
                <div className="flex">
                    <p className="text-white opacity-70 font-bold mb-0 text-sm">{directorData.name}</p>
                    <Link href={directorData.linkedinProfile} className="w-3.5 ml-1.5 pt-1 pb-0 opacity-70 flex mb-0 justify-center items-start text-sm max-w-full">
                        <Image alt="LinkedIn" src={linkedinLogo} width={16} className="border-0 max-w-full inline-block"></Image>
                    </Link>
                </div>
                <div>
                    <p className="text-white opacity-70 text-sm mb-0">Director @ Atonis Tech</p>
                </div>
            </div>
            <div className="mt-0 mb-0 justify-center items-center flex mr-[-15px] ml-[-15px] flex-wrap">
                <div className="max-w-full basis-full md:max-w-[50%] grow md:basis-[50%] mb-4 pr-4 pl-4 flex-1">
                    <div className=" relative z-10 flex h-full mt-6 mr-0 ml-0 p-0 justify-center items-center overflow-hidden rounded-[3px] bg-white shadow-[1px_0_12px_0_rgba(0,0,0,.12)] text-center">
                        <div className="w-full">
                            <form>
                                <div className="h-full relative text-center">
                                    <div className=" overflow-visible relative block z-[1] left-0 right-0 h-full whitespace-nowrap">
                                        <div className=" relative inline-block align-top w-full h-full whitespace-normal text-left">
                                            <div className="flex p-6 flex-row justify-between flex-wrap items-stretch content-between text-base">
                                                <div className="h-[32px] mr-auto mb-6 ml-auto pr-4 pl-4 justify-center items-center rounded-[3px] text-center bg-[#e9e8f0] flex">1 / 6</div>
                                                <div className="w-full self-stretch">
                                                    <label htmlFor="name" className="mb-7 text-black text-xl font-semibold text-center">Let&apos;s start with your name:</label>
                                                    <input type="text" className="focus:outline-none focus:border-red-600 block w-[80%] h-[60px] mx-auto mt-[48px] mb-[24px] pb-[10px] border border-b-[rgb(197, 194, 207)] border-t-0 border-x-0 text-[28px] text-center px-3 pt-2" name="name" placeholder="Enter your name" id="name-input"/>
                                                    <div className="flex h-[48px] justify-center items-center text-base">
                                                        {/* <div id="name-alert" className="text-alert" style="display: none;">Error: Please provide your name to continue</div> */}
                                                    </div>
                                                </div>
                                                <div className="relative flex w-full justify-center flex-wrap items-end content-between self-end">
                                                    <Link href={"#"} className="flex px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 w-full">
                                                        <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full opacity-90"></span>
                                                        <span className="w-full text-center relative group-hover:text-white text-base font-semibold tracking-[1px] uppercase">continue</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mr-[-15px] ml-[-15px] flex-wrap mb-4 px-[15px] flex-1 mt-8">
                <div className=" text-accent-100 uppercase text-center text-xs w-full font-semibold mt-[40px]">You&apos;re in good company</div>
            </div>
            <div className="flex flex-row justify-center items-center mr-[-15px] ml-[-15px] flex-wrap pt-14">
                <div className="max-w-full basis-full lg:max-w-[83%] lg:basis-[83%] mb-4 px-[15px] flex-1">
                    <div className="mt-[-32px] opacity-60 lg:scale-75 flex justify-between flex-wrap sm:flex-nowrap items-end">
                        <div className="px-4 mt-4 max-w-[50%] sm:mt-0 sm:max-w-none">
                            <Image alt="" src={img1} width={139}></Image>
                        </div>
                        <div className="px-4 mt-8 max-w-[50%] sm:mt-0 sm:max-w-none">
                            <Image alt="" src={img2} width={171}></Image>
                        </div>
                        <div className="px-4 mt-8 max-w-[50%] sm:mt-0 sm:max-w-none">
                            <Image alt="" src={img3} width={176}></Image>
                        </div>
                        <div className="px-4 mt-8 max-w-[50%] sm:mt-0 sm:max-w-none">
                            <Image alt="" src={img4} width={185}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-[-15px] flex-wrap mb-4 px-[15px] flex-1 text-xs font-semibold uppercase">
                <div className="mt-[40px] text-accent-100 text-center w-full">In the ❤️ of Sydney, L16 - 175 Pitt St<br/>‍<br/>owner of 521 products<br/><br/>bugreporting.co&nbsp;| remoteworkly.co |&nbsp;cenario.co |&nbsp;smartwriter.ai</div>
            </div>

        </div>
    );
};

export default ContactForm;