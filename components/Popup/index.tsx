import { useState, useEffect } from "react";

const Popup = ({ message, success }:{ message:string, success:boolean }) => {
    const [visible, setVisible] = useState(false);

    // Close popup after 5 seconds
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (message){
            setVisible(true);
            timeout = setTimeout(() => {
                setVisible(false);
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [message]);

    const bgClass = success ? "bg-green-500" : "bg-red-500";

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-300 ease-out z-[99999999] ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
            <div className={`relative rounded-lg shadow-xl ${bgClass}`}>
                <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <div className="flex items-center justify-center mb-4">
                    <div className="flex flex-col items-center p-8 text-white rounded-lg gap-y-4">
                        <svg className="w-16 h-16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.707 4.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-lg font-bold mb-4 text-white">Thank you.</h4>
                        <p className="text-lg">Your enquiry has been submitted and we&apos;ll be in touch!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;