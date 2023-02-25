import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import directorData from "../../data/director.json";
import linkedinLogo from "../../public/linkedin.svg";
import {Pathway_Gothic_One} from "@next/font/google";
const alternateFont = Pathway_Gothic_One({ weight: "400", subsets: ['latin' , 'latin-ext'] });
import img1 from "../../public/footer/one.png";
import img2 from "../../public/footer/two.png";
import img3 from "../../public/footer/three.png";
import img4 from "../../public/footer/four.png";
import contactFormData from "../../data/contact-form.json";
import orgData from "../../data/organization.json";
import Popup from "@components/Popup";

interface FormSlideProps{
    field:Field,
    slideNumber:number,
    canBack:boolean,
    formData: FormData,
    totalFields:number,
    setFieldValue: (value: FormData) => void,
    handleContinueClick: () => void,
    handleBackClick: () => void,
    handleSubmit: () => void,
    isLastQuestion:boolean,
    style: React.CSSProperties,
    isCurrentSlideValid: ()=>boolean;
};
const FormSlide: React.FC<FormSlideProps> = ({ field, isCurrentSlideValid, formData, setFieldValue, handleBackClick, handleContinueClick, handleSubmit, style, isLastQuestion, slideNumber,totalFields,canBack}) => {

    const [isInvalid,setIsValid] = useState(true);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFieldValue({ [name]: value });
        
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFieldValue({[name]: value});
    };
    
    const onClickPrimaryButton = () => {
        const isValid = isCurrentSlideValid();
        console.log("isCurrentSlideValid()", isValid, isCurrentSlideValid());
        setIsValid(isValid);
        if (isLastQuestion){
            handleSubmit();
        }else{
            handleContinueClick()
        }
    };

    console.log("isInvalid", isInvalid, field);

    return (
        <div className=" relative inline-block align-top w-full h-full whitespace-normal text-left duration-500 ease transition-transform" style={style}>
            <div className="flex p-6 flex-row justify-between flex-wrap items-stretch content-between text-base">
                <div className="h-[32px] mr-auto mb-6 ml-auto pr-4 pl-4 justify-center items-center rounded-[3px] text-center bg-[#e9e8f0] flex">{slideNumber} / {totalFields}</div>
                <div className="w-full self-stretch">
                    <label htmlFor="name" className="mb-7 text-black text-xl font-semibold text-center">{field.question}</label>
                    {
                        (field.type === 'text' || field.type === 'email' || field.type === 'phone') && <input type="text" name={field.fieldName} value={formData[field.fieldName] || ""} onChange={handleInputChange} className=" focus:!ring-0 focus:!shadow-none focus:!shadow-white focus:outline-none focus:border-red-600 block w-[80%] h-[60px] mx-auto mt-[48px] mb-[24px] pb-[10px] border border-b-[rgb(197, 194, 207)] border-t-0 border-x-0 text-[28px] text-center px-3 pt-2" placeholder={field.placeholder} />
                    }
                    {
                        (field.type === 'text-area') && <textarea name={field.fieldName} value={formData[field.fieldName] || ""} onChange={handleInputChange} className=" h-auto min-h-[120px] mb-0 rounded text-gray-900 text-lg leading-6 w-full block px-3 py-2 align-middle bg-white border border-[rgb(197, 194, 207)] focus-visible:border-red-600 focus-visible:ring-1 focus-visible:ring-brand-600" />
                    }
                    {
                        (field.type === 'multi-choice') && <div className=" flex justify-start flex-wrap items-center pl-9 gap-y-4">
                            {
                                field.options?.map((option,ind)=>{
                                    return (
                                        <label key={ind} className="cursor-pointer flex items-center grow-0 shrink basis-2/4 bg-transparent pl-5 text-xs leading-5 font-normal">
                                            <input type="radio" name={field.fieldName} value={option} checked={formData[field.fieldName] === option} onChange={handleOptionChange} className="focus:!ring-0 focus:!shadow-none focus:!shadow-white my-0 mr-3 float-left"></input>
                                            <span className=" text-black inline-block cursor-pointer font-normal mb-0">{option}</span>
                                        </label>
                                    );
                                })
                            }
                        </div>
                    }
                    <div className="flex h-[48px] justify-center items-center text-base">
                        {/* <div id="name-alert" className="text-alert" style="display: none;">Error: Please provide your name to continue</div> */}
                    </div>
                </div>
                {
                    (!isInvalid && field?.errorText) &&  <div className=" py-2 w-full flex">
                        <span className=" text-red-600 text-lg font-medium text-center w-full">{field.errorText}</span>
                    </div>
                }
                <div className="relative flex w-full justify-center flex-wrap items-end content-between self-end">
                    <div onClick={onClickPrimaryButton } className="flex px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 w-full cursor-pointer">
                        <span className="absolute top-0 right-0 group-hover:left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full group-hover:opacity-90"></span>
                        <span className="w-full text-center relative group-hover:text-white text-base font-semibold tracking-[1px] uppercase">{ isLastQuestion ? 'submit': 'continue'}</span>
                    </div>
                    {
                        canBack && <div onClick={handleBackClick} className=" mt-6 mb-0 grow-0 shrink basis-full duration-200 ease-in delay-75 text-[#c5c2cf] text-base font-normal leading-4 w-full text-center hover:text-brand-600 cursor-pointer">Back</div>
                    }
                </div>
            </div>
        </div>
    );
};

type Field = {
    question: string;
    type: "text" | "email" | "phone" | "multi-choice" | "text-area";
    options?: string[];
    fieldName: string;
    placeholder?:string;
    errorText?:string;
};
type FormData = {
    [fieldName: string]: string;
};

type ContactFormProps = {
}

const ContactForm: React.FC<ContactFormProps> = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState<FormData>({});
    const [message,setMessage] = useState('');

    const formRef = useRef<HTMLFormElement>(null);

    const setFieldValue = (value: FormData)=>{
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...value,
        }));
    };

    const isCurrentSlideValid = () => {
        const currentField = contactFormData.fields[currentSlide];
        const value = formData[currentField.fieldName]||"";
        switch (currentField.type) {
            case "text":
                return Boolean(value);
            case "email":
                return Boolean(
                    value.match(
                        // Email validation regex pattern
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    )
                );
            case "phone":
                return Boolean(value.match(/^\d{10}$/));
            case "multi-choice":
                return value ? true : false;
            case "text-area":
                return value ? true : false;
            default:
                return false;
        }
    };

    const handleContinueClick = () => {
        if (isCurrentSlideValid()) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleBackClick = () => {
        setCurrentSlide(currentSlide - 1);
    };

    const handleSubmit = async () => {
        if (isCurrentSlideValid()) {
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                setMessage("Form submitted successfly");
                setCurrentSlide(0);
                setFormData({});
                // show success message or close the form
            } catch (err) {
                // handle error
            }
        }
    };

    return (
        <div className="container">
            <Popup message={message} success={true}/>
            <div className="flex justify-center">
                <h3 className={`text-white text-5xl font-semibold tracking-tight uppercase ${alternateFont.className}`}>{contactFormData.heading}</h3>
            </div>
            <div className="relative top-0 mx-auto lg:absolute lg:top-20 left-auto right-0 bottom-auto w-64 lg:mr-3.5 flex-col items-center lg:items-start flex mt-2 mb-6 content-start">
                <div>
                    <div className=" relative flex mb-6 flex-col justify-start flex-nowrap items-start">
                        <p className="text-white p-4 self-start rounded-[3px] bg-accent-200" dangerouslySetInnerHTML={{__html:contactFormData.intro}}></p>
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
                    <p className="text-white opacity-70 text-sm mb-0">Director @ {orgData.name}</p>
                </div>
            </div>
            <div className="mt-0 mb-0 justify-center items-center flex mr-[-15px] ml-[-15px] flex-wrap">
                <div className="max-w-full basis-full md:max-w-[50%] grow md:basis-[50%] mb-4 pr-4 pl-4 flex-1">
                    <div className=" relative z-10 flex h-full mt-6 mr-0 ml-0 p-0 justify-center items-center overflow-hidden rounded-[3px] bg-white shadow-[1px_0_12px_0_rgba(0,0,0,.12)] text-center">
                        <div className="w-full">
                            <form ref={formRef}>
                                <div className="h-full relative text-center">
                                    <div className=" overflow-visible relative block z-[1] left-0 right-0 h-full whitespace-nowrap">
                                        {
                                            (contactFormData.fields as Field[]).map((field,ind)=>{
                                                return <FormSlide 
                                                    style={{
                                                        transform: `translateX(-${(formRef.current?.offsetWidth||0)*currentSlide}px)`
                                                    }}
                                                    key={ind}
                                                    field={field}
                                                    formData={formData}
                                                    canBack={ind!==0}
                                                    setFieldValue={setFieldValue}
                                                    handleContinueClick={handleContinueClick}
                                                    handleBackClick={handleBackClick}
                                                    handleSubmit={handleSubmit}
                                                    slideNumber={ind+1} 
                                                    totalFields={contactFormData.fields.length}
                                                    isLastQuestion={ind===(contactFormData.fields.length-1)}
                                                    isCurrentSlideValid={isCurrentSlideValid}                                                />
                                            })
                                        }
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