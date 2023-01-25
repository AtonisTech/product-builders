import Image from "next/image";
import Link from "next/link";
import React from "react";

/*
<div className="container mt-20">
		<div className="font-semibold	text-xl	leading-9	mb-5 text-center text-black	">AS FEATURED IN: </div>
		<div className="mb-5">
			<div className="flex flex-row justify-evenly text-justify		">
				<div className="w-40">
					<Image src={entrepreneur} alt={"entrepreneur is not display"}></Image>
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
					<Image src={CI0} alt={"CIO is not display"}></Image>
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
*/ 
const Grid = ({items}:{items:React.ReactNode[]}) => {
	return <div className="flex py-[40px] items-center bg-white">
		<div className="container">
			<div className="flex mx-[-15px] flex-wrap">
				<div className="mb-0 px-0 flex-1 bg-transparent">
					<h5 className=" text-center mb-6">As featured in:</h5>
					<div className="flex px-[15px] justify-center flex-wrap items-center">
						{
							items.slice(0, 5).map((item)=>{
								return item;
							}) 
						}
					</div>
					<div className="flex px-[15px] justify-center flex-wrap items-center">
						{
							items.slice(-4).map((item) => {
								return item;
							})
						}
					</div>
				</div>
			</div>
		</div>
	</div>
}
export default Grid;
