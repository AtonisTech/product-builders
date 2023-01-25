import Image from "next/image";
import React from "react";
import customers from "../../data/customerResults.json";
import tropy from "../../public/customer-results/trophy.svg";
import trustedBy from "../../data/trustedBy.json";

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

const CustomerCard = ({ customer }: {
    customer: {
        banner: string;
        name: string;
        tags: string;
        net: string;
        nameWidth:number;
        nameHeight:number;
    } }) => {
    return <div className="mb-0 px-0 max-w-[25%] basis-[25%] flex-1 bg-transparent">
        <div className="flex mx-[15px] mb-[30px] pb-[24px] justify-center flex-wrap items-start text-center overflow-hidden py-[32px] pr-4 rounded-[3px] bg-white shadow-[1px_0_12px_0_rgba(0,0,0,.12)]">
            <div className="flex overflow-hidden h-[160px] mt-[-32px] mb-4 -mx-4 pt-0 justify-center items-center">
                <Image src={`/customer-results/${customer.banner}`} width={270} height={180} alt="" className="w-full max-w-full self-start"></Image>
            </div>
            <div className="flex h-[40px] mb-4 items-center">
                <Image src={`/customer-results/${customer.name}`} width={customer.nameWidth} height={customer.nameHeight} alt="" className="max-w-full"></Image>
            </div>
            <p className=" grow-0 shrink basis-[100%] mb-0 text-xs">{customer.tags}</p>
            <div className=" flex w-auto h-[24px] mt-3 px-3 flex-nowrap items-center content-center self-end rounded-[20px] bg-sec-brand-400">
                <Image src={tropy} alt="" className="max-w-full mr-2"></Image>
                <div className=" font-bold mb-0 text-xs">{customer.net}</div>
            </div>
        </div>
    </div>
};

const TechCard = () => {
    return <>
        <div className=" py-[104px] bg-[#e9e8f0]">
            <div className=" container">
                <div className="my-0 justify-center items-center flex mx-[-15px] flex-wrap">
                    <div className=" max-w-[75%] basis-[75%] mb-4 px-[15px] flex-1 bg-transparent">
                        <div className=" flex mb-[40px] flex-col text-center">
                            <h3>What we do</h3>
                            <p>Atonis Tech Labs is an award winning App Development team based in Sydney, Australia. Trusted by Fortune500 companies and growing start ups. We help you innovate and connect with your users through technology.</p>
                        </div>
                    </div>
                </div>
                <div className="mx-[-7.5px] flex flex-col gap-5 lg:flex-wrap lg:flex-row">
                    {
                        details.map((a, ind) => {
                            return <div key={ind} className="mb-0 px-0 flex-1 bg-transparent">
                                <div className="h-full overflow-hidden mx-[7.5px] py-6 px-4 rounded-[3px] bg-white shadow-[1px_0_12px_0_rgba(0,0,0,.12)] text-center">
                                    <div className=" relative flex w-full h-[64px] mb-[32px] justify-center flex-wrap">
                                        <div className=" absolute z-20 flex h-[64px] mx-auto justify-center items-center">
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
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        <div className=" relative pt-[104px] pb-6 bg-[#f5f4f7]">
            <div className="container">
                <div className="my-0 justify-center items-center flex mx-[-15px] flex-wrap">
                    <div className=" max-w-[58.3333%] basis-[58.3333%] mb-4 px-[15px] flex-1">
                        <div className=" flex mb-[40px] flex-col text-center">
                            <div className="text-[#161617] mb-4 text-xs font-semibold leading-tight uppercase">Meet the 521 Alumni</div>
                            <h3>technology Driven by results</h3>
                            <p>Innovate your company&apos;s technology by partnering with a dev team that&apos;s done it before. We&apos;ve helped our clients launch digital products in over 20+ industries.</p>
                        </div>
                    </div>
                </div>
                <div className=" flex mx-[-15px] flex-wrap">
                    {
                        customers.items.map((item,ind)=>{
                            return <CustomerCard customer={item} key={ind}></CustomerCard>
                        })
                    }
                </div>
                <div className="h-[72px]"></div>
                <div className="flex mx-[-15px] flex-wrap">
                    <div className="mb-4 px-[15px] flex-1">
                        <h5 className="mb-[32px] text-center">Trusted by fast-growing start ups and organisations</h5>
                    </div>
                </div>
                <div className="my-0 justify-center items-center flex mx-[-15px] flex-wrap">
                    <div className="lg:max-w-[83.333%] lg:basis-[83.333%] mb-4 px-[15px] flex-1">
                        <div className="flex justify-between flex-wrap md:flex-nowrap lg:flex-nowrap items-end">
                            {
                                trustedBy.items.map((cus,ind)=>{
                                    return <div key={ind}>
                                        <Image src={`/trusted-by/${cus.url}`} alt="" width={cus.width} height={170}></Image>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute left-0 top-[-76px] right-0 bottom-0 flex h-auto justify-center items-start">
                <div className="relative w-[1200px] h-full">
                    
                </div>
            </div>
        </div>
    </>
};

export default TechCard;
