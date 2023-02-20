import Head from 'next/head'
import Grid from '@components/Grid'
import TechCard from '@components/TechnologyCard'
import HeroSection from '@components/HeroSection';
import featuredData from '../data/featured.json';
import Link from 'next/link';
import Image from 'next/image';
import HexBgSection from '@components/HexBgSection';
import orgData from '../data/organization.json';
import passinateData from '../data/passionate.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'path';
import fs from 'fs';
import Carousel from '@components/Carousel';
import quote from '../public/quote.svg';
import linkedin from '../public/linkedin.svg';
import advantageData from '../data/advantage.json';

interface FeedBack {
	name: string,
	position: string,
	image: string,
	profile: string,
	content: string
}
interface CaseStudyMeta {
	title: string,
	listViewDesc: string,
	mainImage: string,
	featuredBy: { url: string, width: number }[],
	feedBack: FeedBack,
	problem: string,
	approach: string,
	result: string,
	techs: string[]
}

interface CaseStudy extends CaseStudyMeta {
	slug: string;
};


const CaseStudiesDirectory = path.join(process.cwd(), '/data/case-studies');

export const getStaticProps: GetStaticProps<{ posts: FeedBack[] }> = async (
	context
) => {
	try {
		const filenames = await fs.readdirSync(CaseStudiesDirectory);

		const posts = filenames.map((fileName) => {
			const fileNamePath = fs.readFileSync(
				CaseStudiesDirectory + `/${fileName}`,
				'utf8'
			);
			const post: CaseStudyMeta = JSON.parse(fileNamePath) as CaseStudyMeta;
			return {
				...post.feedBack,
			} as FeedBack;
		});
		return {
			props: { posts },
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>{orgData.name}</title>
				<meta name="description" content={orgData.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo-96.png" />
			</Head>
			<HeroSection/>
			<Grid items={
				featuredData.items.map((item,ind)=>{
					return item.url ? <Link href={item.url} key={ind} className="max-w-full inline-block">
						<Image src={`/assets/${item.companyLogo}`} alt='' width={item.width} height={25} className={`h-auto ${ind !== 0 &&'my-3 mx-[64px]'}`}></Image>
					</Link> : <Image src={`/assets/${item.companyLogo}`} alt='' key={ind} width={item.width} height={25} className={`h-auto my-3 mx-[64px]`}></Image>
				})
			}/>
			<HexBgSection>
				<TechCard />
			</HexBgSection>
			<section className='relative z-[2] overflow-hidden pt-20 pb-12 bg-accent-600 bg-scroll'>
				<div className=' container'>
					<div className=' justify-center my-0 items-center flex flex-col-reverse mx-[-15px] flex-wrap md:flex-row' style={{alignContent:'stretch'}}>
						<div className=' mb-4 px-[15px] flex-1 bg-transparent'>
							<Image src={`/${passinateData.img}`} alt='' width={670} height={400} className={'mt-0 mb-0 pr-0 md:-mt-10 md:-mb-24 md:pr-10 pl-0'}></Image>
						</div>
						<div className='max-w-[82%] md:max-w-[42%] basis-[82%] md:basis-[42%] mb-4 px-[15px] flex-1'>
							<div className=' mb-0 text-center md:text-left flex flex-col'>
								<div className=' mb-4 text-white font-semibold uppercase tracking-[1px] text-xs leading-5'>{passinateData.subHeading}</div>
								<h3 className=' text-white'>{passinateData.heading}</h3>
								<p className='text-white'>
									{passinateData.content}
									{
										passinateData.hasgTags.map((tag,ind)=>{
											return <span key={ind} className=" text-yellow-500">{tag}</span>
										})
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id='testimonials' className=' relative z-[1] overflow-hidden pb-52 border-b border-gray-200 bg-white pt-24'>
				<div className='absolute left-[-15px] top-auto bottom-[10%] w-[130%] h-full mx-auto border-b border-gray-200 bg-[#f5f4f7] -rotate-3'></div>
				<div className=' container'>
					<div className='my-0 justify-center items-center flex -mx-[15px] flex-wrap' style={{ alignContent: 'stretch' }}>
						<div className='max-w-[82%] md:max-w-[42%] basis-[82%] md:basis-[42%] px-[15px] flex-1 mb-10'>
							<h3 className='text-center'>Testimonials</h3>
						</div>
					</div>
					<div className=' my-0 justify-center items-center flex mx-[-15px] flex-wrap' style={{ alignContent: 'stretch' }}>
						<div className=' mb-4 px-[15px] flex-1 bg-transparent'>
							<Carousel data={posts} ItemComponent={
								({ data }) => {
									return <div className='my-0 justify-center items-center flex mx-[-15px] flex-wrap'>
										<div className='flex mr-0 ml-4 pr-0 md:pr-12 pl-0 items-center justify-center flex-wrap md:flex-nowrap rounded overflow-hidden bg-white shadow-sm'>
											<div className=' relative w-full md:w-fit'>
												<div className='relative overflow-hidden md:w-[270px] md:h-[296px] grow-0 shrink-0 basis-auto w-full h-full'>
													<Image className='w-full max-w-none' alt={data.name} src={`/case-studies-resource/${data.image}`} blurDataURL={`/_next/image?url=/case-studies-resource/${data.image}&w=16&q=1`} height={270} width={270} loading="lazy" decoding="async"></Image>
												</div>
												<div className=' absolute left-0 right-0 top-auto bottom-0 z-[1]'>
													<div className=' relative top-0 z-[1] -mb-1 pt-[6px] pb-1 px-3 float-left bg-brand-600 flex items-center rounded-tr-md'>
														<h5 className=' text-white pr-2 float-left mb-0'>{data.name}</h5>
														{
															data.profile && <a rel="noreferrer" href={data.profile} target="_blank" className='py-[3px] flex mb-0 ml-2 justify-center items-start max-w-full bg-transparent'>
																<Image src={linkedin} alt="LinkedIn" width={16}></Image>
															</a>
														}
													</div>
													<div className='top-0 w-full mb-0 clear-left relative z-[1] inline-block py-2 px-3 float-left bg-brand-600'>
														<p className=' opacity-70 text-white mb-0 text-xs'>{data.position}</p>
													</div>
												</div>
											</div>
											<div className=' relative ml-0 md:ml-12 mt-6 md:mt-0'>
												<Image className=' absolute left-2/4 -translate-x-2/4 md:translate-x-0 scale-75 md:scale-100 md:-left-6 -top-4 z-10' src={quote} alt="experience"></Image>
												<div className=' relative z-20'>
													<p className='mb-0 text-center text-sm md:text-base md:text-left px-5 pb-5 md:px-0 md:pb-0'>{data.content}</p>
												</div>
											</div>
										</div>
									</div>
								}
							} />
						</div>
					</div>
				</div>
				
			</section>
			<section id="why-us" className='relative z-auto pt-16 bg-white pb-24'>
				<div></div>
				<div className=' container'>
					<div className=' my-0 justify-center items-center flex mx-[-15px] flex-wrap' style={{ alignContent: 'stretch' }}>
						<div className='max-w-[82%] md:max-w-[42%] basis-[82%] md:basis-[42%] px-[15px] flex-1 mb-10'>
							<h3 className='text-center'>{orgData.name} ADVANTAGE</h3>
						</div>
					</div>
					<div className=' mx-[-7.5px] flex flex-wrap' style={{ alignContent: 'stretch' }}>
						{
							advantageData.items.map((atvantage,ind)=>{
								return <div key={ind} className="mb-0 px-0 flex-1 bg-transparent max-w-full basis-full md:max-w-[50%] lg:max-w-none md:basis-1/2 lg:basis-0">
									<div className="overflow-hidden mx-[7.5px] py-8 px-4 rounded-[3px] flex flex-row lg:flex-col pb-6">
										<div className=" relative flex h-[64px] mb-[32px] justify-center flex-wrap w-20 lg:w-full scale-75 md:scale-100">
											<div className=" absolute z-20 flex h-[64px] mx-auto justify-center items-center">
												<Image src={`/assets/${atvantage.icon}`} alt={"mobile icon is not displayed"} width={30} height={30}></Image>
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
											<h6 className="!text-left lg:!text-center mb-2">{atvantage.heading}</h6>
											<p className="!text-left lg:!text-center mb-0 text-xs leading-5">{atvantage.desc}</p>
										</div>
									</div>
								</div>
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}
