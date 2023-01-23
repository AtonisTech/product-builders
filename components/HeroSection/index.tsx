import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import heroData from '../../data/hero.json';
import poly from '../../public/poly.svg';
import hex from '../../public/hex.svg';

type HeroSectionProps={

};

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
    const vidRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => { vidRef?.current?.play(); }, []);

    return <div className="relative flex overflow-hidden h-[600px] mt-[64px] items-center bg-transparent py-[104px]">
        <div className=" container">
            <div className="mt-0 mb-0 justify-center items-center flex mx-[-15px] flex-wrap content">
                <div className="max-w-[75%] basis-[75%] mb-4 px-[15px] flex-1 bg-transparent">
                    <div className=" relative z-50 flex flex-col flex-wrap items-start">
                        {
                            heroData.heading.map((heading,ind)=>{
                                return <h2 key={ind} className=" text-white">{heading}</h2>;
                            })
                        }
                        <div className="flex mt-4 flex-wrap">
                            {
                                heroData.highlights.map((highlight,_ind)=>{
                                    return <div key={_ind} className=" static block h-auto py-[4px] px-[12px] text-[14px] w-auto mt-[8px] self-end rounded-[20px] bg-sec-brand-400">
                                        <div>
                                            <strong>{highlight}</strong>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="mt-6 flex items-center">
                            <Link href={heroData.action.url} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block">
                                <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full opacity-90"></span>
                                <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">{heroData.action.label}</span>
                            </Link>
                            <Link href={heroData.secAction.url} className="ml-4 duration-500 text-white/60 text-[12px] font-medium leading-tight hover:text-sec-brand-600">{heroData.secAction.label}</Link>
                        </div>
                    </div>
                </div>
                <div className=" mb-4 px-[15px] flex-1 bg-transparent">
                    <div className=" relative z-40 h-[480px]">
                        <div className=" absolute -left-full top-[10%] right-0 bottom-0 z-30 w-[460px] h-[400px] mx-0 rotate-[15deg] overflow-hidden">
                            <div className=" absolute overflow-hidden w-full h-full rotate-[60deg]">
                                <div className=" shadow-[24px_0_38px_0_rgba(22,22,23,.2),9px_0_46px_0_rgba(0,0,0,.2),11px_0_15px_0_rgba(0,0,0,.2)] absolute overflow-hidden w-full h-full rotate-[-120deg]">
                                    <div className=" absolute flex w-full h-full px-[15px] rotate-90 origin-[50%_50%] text-white text-[13px] text-center">
                                        <div className=" fixed -left-full -top-[25%] right-0 bottom-auto overflow-visible w-auto h-[150%] rotate-[-15deg]">
                                            <video ref={vidRef} className=" bg-cover absolute m-auto w-full h-full -right-full -bottom-full -left-full -top-full object-cover z-[-100] inline-block align-baseline" playsInline={true} loop={true} autoPlay={true} style={{ backgroundPosition: '50% 50%' }} src={'/hero_animation.mp4'}></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image className=" absolute left-[-145%] top-auto right-auto bottom-[-50%] z-[11] max-w-none" src={poly} alt=""></Image>
                        <Image className=" absolute left-[-56%] top-[-57%] right-0 bottom-auto z-[10] max-w-none" src={hex} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className=" absolute left-0 top-0 right-0 bottom-0 z-[2] h-full" style={{ backgroundImage: 'linear-gradient(135deg,#df3940 22%,rgba(223,57,64,0))'}}></div>
        <div className=" absolute left-0 top-0 right-0 bottom-0 z-[1] h-full bg-brand-600 bg-[url('/hero-bg.jpg')] bg-cover"></div>
    </div>
};

export default HeroSection;