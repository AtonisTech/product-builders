import Image from "next/image";
import Link from "next/link";
import React from "react";
import directorData from "../../data/director.json";
import linkedinLogo from "../../public/linkedin.svg";
import {Pathway_Gothic_One} from "@next/font/google"
const alternateFont = Pathway_Gothic_One({ weight:"400"});
import img1 from "../../public/footer/one.png";
import img2 from "../../public/footer/two.png";
import img3 from "../../public/footer/three.png";
import img4 from "../../public/footer/four.png";

type ContactFormProps = {
}
/*

<div className="container">
    
    <div className="row align-center">
        <div className="col col-6 col-m-10 col-sm-12">
            <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22c0" className="card form" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; opacity: 1;">
                <div className="contact-form-container">
                    <div className="form-block-2 w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" aria-label="Email Form">
                            <div data-delay="4000" data-animation="slide" className="slider-4 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="true" data-disable-swipe="true" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false" role="region" aria-label="carousel">
                                <div className="mask-4 w-slider-mask" id="w-slider-mask-2">
                                    <div className="w-slide" aria-label="1 of 6" role="group" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step">
                                            <div className="step">1 / 6</div>
                                            <div className="form-top-content">
                                                <label for="name" className="input-label">Let's start with your name:</label><input type="text" className="text-input w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" id="name-input" tabindex="-1">
                                                <div className="form-verification">
                                                    <div id="name-alert" className="text-alert">Error: Please provide your name to continue</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block">
                                                <a href="#" id="name-step" data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22d2" className="btn-i wide w-inline-block" tabindex="-1">
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22d3" className="btn-t">Continue</div>
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22d5" className="btn-cover" style="transform: translate3d(-600px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
                                                </a>
                                                <div className="div-block-5 hide">
                                                    <div className="text-block-2">Act fast! Limited spots left for 2020.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-slide" aria-label="2 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step" aria-hidden="true">
                                            <div className="step" aria-hidden="true">2 / 6</div>
                                            <div className="form-top-content" aria-hidden="true">
                                                <label for="email" className="input-label" aria-hidden="true">What's your email address?</label><input type="text" className="text-input w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email-input" required="" tabindex="-1" aria-hidden="true">
                                                <div className="form-verification" aria-hidden="true">
                                                    <div id="email-alert" className="text-alert" aria-hidden="true">Error: Please enter your email to continue</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block" aria-hidden="true">
                                                <a href="#" id="email-prev" className="prev-link" tabindex="-1" aria-hidden="true">Back</a>
                                                <a href="#" id="email-step" data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22e7" className="btn-i wide w-inline-block" tabindex="-1" aria-hidden="true">
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22e8" className="btn-t" aria-hidden="true">Continue</div>
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c22ea" className="btn-cover" style="transform: translate3d(-600px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" aria-hidden="true"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-slide" aria-label="3 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step" aria-hidden="true">
                                            <div className="step" aria-hidden="true">3 / 6</div>
                                            <div className="form-top-content" aria-hidden="true">
                                                <label for="Phone" className="input-label" aria-hidden="true">What's your phone number?</label><input type="text" className="text-input w-input" maxlength="256" name="Phone" data-name="Phone" placeholder="Enter your phone number" id="phone-input" required="" tabindex="-1" aria-hidden="true">
                                                <div className="form-verification" aria-hidden="true">
                                                    <div id="phone-alert" className="text-alert" aria-hidden="true">Error: Please enter your email to continue</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block" aria-hidden="true">
                                                <a href="#" id="phone-prev" className="prev-link" tabindex="-1" aria-hidden="true">Back</a>
                                                <a href="#" id="phone-step" data-w-id="7d0c6088-f36c-b71e-081a-4cd0c127d5eb" className="btn-i wide w-inline-block" tabindex="-1" aria-hidden="true">
                                                    <div className="btn-t" aria-hidden="true">Continue</div>
                                                    <div className="btn-cover" style="transform: translate3d(-600px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" aria-hidden="true"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-slide" aria-label="4 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step radio" aria-hidden="true">
                                            <div className="step" aria-hidden="true">4 / 6</div>
                                            <div className="form-top-content" aria-hidden="true">
                                                <label for="name" className="input-label" aria-hidden="true">Do you have a deadline?</label>
                                                <div className="form-radio-container" aria-hidden="true"><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="1 - 3 months" name="Deadline" value="1 - 3 months" data-name="Deadline" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="1 - 3 months" className="radio-label w-form-label" aria-hidden="true">1 - 3 months</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="6 - 12 months" name="Deadline" value="6 - 12 months" data-name="Deadline" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="6 - 12 months" className="radio-label w-form-label" aria-hidden="true">6 - 12 months</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="3 - 6 months" name="Deadline" value="3 - 6 months" data-name="Deadline" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="3 - 6 months" className="radio-label w-form-label" aria-hidden="true">3 - 6 months</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" name="Deadline" value="No deadline" data-name="Deadline" id="No deadline" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="No deadline" className="radio-label w-form-label" aria-hidden="true">No deadline</span></label></div>
                                                <div className="form-verification" aria-hidden="true">
                                                    <div id="deadline-alert" className="text-alert" aria-hidden="true">Error: Please select an option to continue</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block" aria-hidden="true">
                                                <a href="#" id="deadline-prev" className="prev-link" tabindex="-1" aria-hidden="true">Back</a>
                                                <a href="#" id="deadline-step" data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c2309" className="btn-i wide w-inline-block" tabindex="-1" aria-hidden="true">
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c230a" className="btn-t" aria-hidden="true">Continue</div>
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c230c" className="btn-cover" style="transform: translate3d(-600px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" aria-hidden="true"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-slide" aria-label="5 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step radio" aria-hidden="true">
                                            <div className="step" aria-hidden="true">5 / 6</div>
                                            <div className="form-top-content" aria-hidden="true">
                                                <label for="name" className="input-label" aria-hidden="true">What budget are you considering?</label>
                                                <div className="form-radio-container" aria-hidden="true"><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="2500" name="Budget" value="2500-5000" data-name="Budget" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="2500" className="radio-label w-form-label" aria-hidden="true">$10,000 - 50,000</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="5000" name="Budget" value="5000-7500" data-name="Budget" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="5000" className="radio-label w-form-label" aria-hidden="true">$50,000 - 100,000</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" id="7500" name="Budget" value="7500-10000" data-name="Budget" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span for="7500" className="radio-label w-form-label" aria-hidden="true">$100,000 - 200,000</span></label><label className="radio-button-field w-radio" aria-hidden="true"><input type="radio" name="Budget" value="10000" data-name="Budget" id="radio" className="w-form-formradioinput radio-btn w-radio-input" tabindex="-1" aria-hidden="true"><span className="radio-label w-form-label" for="radio" aria-hidden="true">Other</span></label></div>
                                                <div className="form-verification" aria-hidden="true">
                                                    <div id="budget-alert" className="text-alert" aria-hidden="true">Error: Please select an option to continue</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block" aria-hidden="true">
                                                <a href="#" id="budget-prev" className="prev-link" tabindex="-1" aria-hidden="true">Back</a>
                                                <a href="#" id="budget-step" data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c232b" className="btn-i wide w-inline-block" tabindex="-1" aria-hidden="true">
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c232c" className="btn-t" aria-hidden="true">Continue</div>
                                                    <div data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c232e" className="btn-cover" style="transform: translate3d(-600px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" aria-hidden="true"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-slide" aria-label="6 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                        <div className="form-step" aria-hidden="true">
                                            <div className="step" aria-hidden="true">6 / 6</div>
                                            <div className="form-top-content" aria-hidden="true">
                                                <label for="email" className="input-label" aria-hidden="true">Tell us about your project:</label>
                                                <textarea id="details-input" name="field" maxlength="5000" placeholder="..." data-name="Field" className="text-area w-input" tabindex="-1" aria-hidden="true"></textarea>
                                                <div className="form-verification" aria-hidden="true">
                                                    <div id="details-alert" className="text-alert" aria-hidden="true">Error: Please tell us about your project</div>
                                                </div>
                                            </div>
                                            <div className="next-prev-block" aria-hidden="true"><a href="#" id="details-prev" className="prev-link" tabindex="-1" aria-hidden="true">Back</a><input type="submit" value="Submit" data-wait="Submitting your enquiry..." className="btn-i wide submit w-button" tabindex="-1" aria-hidden="true"></div>
                                        </div>
                                    </div>
                                    <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div>
                                </div>
                                <div className="left-arrow-2 w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-2" aria-label="previous slide" style="display: none;"></div>
                                <div className="right-arrow w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-2" aria-label="next slide"></div>
                                <div className="slider-dot-nav w-slider-nav w-round">
                                    <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 6" aria-pressed="true" role="button" tabindex="0" style="margin-left: 3px; margin-right: 3px;"></div>
                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                                </div>
                            </div>
                        </form>
                        <div className="success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                            <div>Thank you. <br>Your enquiry has been submitted and we'll be in touch!</div>
                        </div>
                        <div className="error-message w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                            <div>Oops! Something went wrong. Email us: vaibhav@five2one.com.au</div>
                        </div>
                    </div>
                    <a href="#" data-w-id="6f8150e4-1189-dc24-c412-d9ca2f4c2349" className="form-close-btn w-inline-block" tabindex="-1"></a>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="sub-headline trusted-hl">You're in good company</div>
        </div>
    </div>
    <div className="row align-center">
        <div className="col col-10 col-sm-11 col-xs-12">
            <div className="trusted scaled">
                <div className="trusted_col"><img src="https://uploads-ssl.webflow.com/5c931485199a684293dd6af3/5cef3b55323d3a19a876f6fd_1-co%20copy.png" alt="" width="139"></div>
                <div className="trusted_col"><img src="https://uploads-ssl.webflow.com/5c931485199a684293dd6af3/5d49792815f2c1a753fe8fc7_2-co%20copy.png" alt="" width="171"></div>
                <div className="trusted_col"><img src="https://uploads-ssl.webflow.com/5c931485199a684293dd6af3/5c9b5f86bcc30e82123a53c9_3.png" alt="" className="image-4" width="176"></div>
                <div className="trusted_col"><img src="https://uploads-ssl.webflow.com/5c931485199a684293dd6af3/5cc6a2d47c5efa5d53d98e3e_4-co%20copy.png" alt="" width="185"></div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="sub-headline trusted-hl">In the ❤️ of Sydney, L16 - 175 Pitt St<br>‍<br>owner of 521 products<br><br>bugreporting.co&nbsp;| remoteworkly.co |&nbsp;cenario.co |&nbsp;smartwriter.ai</div>
        </div>
    </div>
</div>


*/ 
const ContactForm: React.FC<ContactFormProps> = ({ }) => {

    return (
        <div className="container">
            <div className="flex justify-center">
                <h3 className={`text-white text-5xl font-semibold tracking-tight uppercase ${alternateFont.className}`}>Have a project for us?</h3>
            </div>
            <div className="absolute top-20 left-auto right-0 bottom-auto w-64 mr-3.5 flex-col items-start flex mt-2 mb-6 content-start">
                <div>
                    <div className=" relative flex mb-6 flex-col justify-start flex-nowrap items-start">
                        <p className="text-white p-4 self-start rounded-[3px] bg-accent-200">“Hi, I’m Vaibhav (or just 'V'). <br /> Are you looking for an experienced development team? <br />Look no further. <br /><span className=" text-sec-brand-600">Contact us today for your</span> <span className="text-sec-brand-600">free consultation worth $900!</span>” </p>
                        <div className=" absolute left-[8%] top-auto right-auto bottom-[-14px] h-6 w-6 mb-0 border-t-[18px] border-r-[16px] border-b border-l-[8px] border-l-accent-600 border-r-accent-600 border-t-accent-200 border-b-black" style={{ borderTopStyle: 'solid',borderBottomStyle: 'none',borderLeftStyle: 'solid'}}></div>
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
                    <p className="text-white opacity-70 text-sm mb-0">Director @ Five2One Tech Labs</p>
                </div>
            </div>
            <div className="mt-0 mb-0 justify-center items-center flex mr-[-15px] ml-[-15px] flex-wrap">
                <div className=" max-w-[50%] grow basis-[50%] mb-4 pr-4 pl-4 flex-1">
                    <div className=" relative z-10 flex h-full mt-6 mr-0 ml-0 p-0 justify-center items-center overflow-hidden rounded-[3px] bg-white shadow-[1px_0_12px_0_rgba(0,0,0,.12)] text-center">
                        <div className="w-full">
                            <form>
                                <div className="h-full relative text-center">
                                    <div className=" overflow-visible relative block z-[1] left-0 right-0 h-full whitespace-nowrap">
                                        <div className=" relative inline-block align-top w-full h-full whitespace-normal text-left">
                                            <div className="flex p-6 flex-row justify-between flex-wrap items-stretch content-between text-base">
                                                <div className="h-[32px] mr-auto mb-6 ml-auto pr-4 pl-4 justify-center items-center rounded-[3px] text-center bg-[#e9e8f0] flex">1 / 6</div>
                                                <div className="w-full self-stretch">
                                                    <label htmlFor="name" className="mb-7 text-black text-xl font-semibold text-center">Let's start with your name:</label>
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
            <div className="flex mr-[-15px] ml-[-15px] flex-wrap mb-4 px-[15px] flex-1">
                <div className=" text-accent-100 uppercase text-center text-xs w-full font-semibold mt-[40px]">You're in good company</div>
            </div>
            <div className="flex flex-row justify-center items-center mr-[-15px] ml-[-15px] flex-wrap">
                <div className="max-w-[83%] basis-[83%] mb-4 px-[15px] flex-1">
                    <div className="mt-[-32px] opacity-60 scale-50 flex justify-between flex-nowrap items-end">
                        <div>
                            <Image alt="" src={img1} width={139}></Image>
                        </div>
                        <div>
                            <Image alt="" src={img2} width={171}></Image>
                        </div>
                        <div>
                            <Image alt="" src={img3} width={176}></Image>
                        </div>
                        <div>
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