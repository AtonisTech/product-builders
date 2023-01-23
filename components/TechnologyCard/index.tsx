import Image from "next/image";
import React from "react";

const details = [
    {
        icon: 'mobile.svg',
        title: 'WEB & MOBILE APPS',
        subtitle: 'Deliver great product experiences into your customers hands with Web & Mobile Apps that are built to scale from day one.',
    },
    {
        icon: 'tech.svg',
        title: 'TECHNICAL STRATEGY',
        subtitle: 'Empower your business with emerging technologies and best practices to improve your company tech advantage. ',
    },
    {
        icon: 'AI.svg',
        title: 'ARTIFICIAL INTELLIGENCE ',
        subtitle: 'Engineer extremely smart solutions using Machine Learning and improve your company efficiency.',
    },
    {
        icon: 'API.svg',
        title: 'API & PLATFORMS',
        subtitle: 'Power your app with high performance API systems that use the best modern code patterns. Connect users to your platform. ',
    },
    {
        icon: 'training.svg',
        title: 'Training',
        subtitle: 'Up skill with customised training programs for teams and individual developers to ship good code, fast and efficiently.',
    },

];

const TechCard = () => {
    return <div className=" overflow-hidden">
        <div className="py-[104px] bg-[#e9e8f0]">
            <div className=" container">
                <div className=" mt-0 mb-0 justify-center items-center flex mx-[-15px] flex-wrap">
                    <div className=" max-w-[75%] basis-[75%] px-[15px] mb-4 flex-1 bg-transparent">
                        <div className=" flex mb-[40px] flex-col text-center">
                            <h3 className="text-center font-bold pt-10">WHAT WE DO</h3>
                            <p>521 Tech Labs is an award winning App Development team based
                                in Sydney, Australia. Trusted by Fortune500 companies and growing start ups. We help you innovate and connect with your users through technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-[-7.5px] flex flex-wrap">
                    <div className="flex flex-row justify-evenly text-justify">
                        {details.map((a,ind) => {
                            return <div key={ind} className="card flex flex-col">
                                <div className=" relative flex w-full h-[64px] mb-[32px] justify-center flex-wrap">
                                    <div className="absolute z-20 flex h-[64px] mr-auto ml-auto justify-center items-center">
                                        <Image src={`/assets/${a.icon}`} alt={"mobile icon is not displayed"} width={30} height={30}></Image>
                                    </div>
                                    <div className=" relative left-[-8%] top-0 right-auto bottom-[8%] z-10 block w-[27px] h-[24px] my-0 mx-auto self-end overflow-hidden">
                                        <div className=" absolute overflow-hidden w-full h-full rotate-[60deg]">
                                            <div className=" absolute overflow-hidden w-full h-full rotate-[-120deg]">
                                                <div className=" top-[-10%] right-[-10%] w-[120%] h-[120%] bg-sec-brand-400 rotate-90"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className=" text-center">{a.title}</h6>
                                    <p className=" mb-0 text-xs text-center leading-5">{a.subtitle}</p>
                                </div>
                            </div>
                        }
                        )

                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default TechCard;
