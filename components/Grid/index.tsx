import Image from "next/image";
import Link from "next/link";
import React from "react";
import yahoo from "../../public/assets/yahoo.png";
import CA from "../../public/assets/CA.png";
import CI0 from "../../public/assets/CIO.png";
import entrepreneur from "../../public/assets/entrepreneur.png";
import KPMG from "../../public/assets/KPMG.png";
import martec from "../../public/assets/martec.png";
import reuters from "../../public/assets/reuters.svg";
import VB from "../../public/assets/VB.svg";
import smartcompany from "../../public/assets/smartcompany.png";

const Grid = () => {
      return <div className="container mt-20">
      <div className="font-semibold	text-xl	leading-9	mb-5 text-center text-black	">AS FEATURED IN: </div>
        <div className="mb-5">
        <div className="flex flex-row justify-evenly text-justify		"> 
          <div className="w-40">
           <Image src={entrepreneur}  alt={"entrepreneur is not display"}></Image>
           </div>
           <div className="w-20">
           <Image src={yahoo} alt={"yahoo is not display"} ></Image>
           </div>
           <div className="w-40">
           <Image src={reuters} alt={"reuters is not display"}></Image>
           </div>
           <div className="w-40">
           <Image src={VB} alt={"VB is not display"}></Image>
           </div>
           <div className="w-20">
           <Image src={KPMG} alt={"VB is not display"}></Image>
           </div>

        </div>
        </div>
        
        <div className="mb-10 mt-5">
        <div className="flex flex-row justify-evenly text-justify	"> 
          <div className="w-20">
           <Image src={CI0}  alt={"CIO is not display"}></Image>
           </div>
           <div className="w-40">
           <Image src={CA} alt={"CA is not display"} ></Image>
           </div>
           <div className="w-40">
           <Image src={smartcompany} alt={" smartcompany is not display"}></Image>
           </div>
           <div className="w-20">
           <Image src={martec} alt={" martec is not display"}></Image>
           </div>
            </div>
            </div>
  

      </div>

}
export default Grid;
