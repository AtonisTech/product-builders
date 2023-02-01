import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import linkedin from '../../public/linkedin.svg';
import quote from '../../public/quote.svg';
import Head from 'next/head';
import orgData from '../../data/organization.json';

interface CaseStudyMeta {
    title: string,
    listViewDesc: string,
    mainImage: string,
    featuredBy: {url:string,width:number}[],
    feedBack: {
        name: string,
        position: string,
        image: string,
        profile: string,
        content: string
    },
    problem: string | string[],
    approach: string | string[],
    result: string|string[],
    techs: string[],
    approachImg?: string,
    resultImg?:string,
}

const podcastDirectory = path.join(process.cwd(), '/data/case-studies');

export const getStaticPaths: GetStaticPaths = async () => {
    const filenames = await fs.readdirSync(podcastDirectory);

    return {
        paths: filenames.map((filename) => ({
            params: { slug: filename.replace('.json', '') },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ data: CaseStudyMeta }> = async (
    context
) => {
    const { params } = context;

    if (!params) {
        return {
            notFound: true,
        };
    }

    try {
        const fileName = fs.readFileSync(
            podcastDirectory + `/${params.slug}.json`,
            'utf8'
        );
        const fileData = JSON.parse(fileName) as CaseStudyMeta;

        return {
            props: { data: fileData },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {
        title,
        featuredBy,
        feedBack,
        approachImg ='brand-filled-logo.svg',
        resultImg ='brand-filled-logo.svg',
        mainImage,
        problem,
        result,
        approach,
        techs,
    } = data;

    return (
        <>
            <Head>
                <title>{title} - {orgData.name}</title>
                <meta name="description" content={`Case studie of ${title} from ${orgData.name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-96.png" />
            </Head>
            <section className="flex justify-center items-center gap-x-4 gap-y-4 mt-[64px] py-20 bg-brand-600 bg-fixed" style={{
                backgroundPosition: '0 0,50% 100%',
                backgroundSize: 'auto, cover',
                backgroundRepeat: 'repeat,no-repeat',
                backgroundAttachment: 'scroll,fixed',
                backgroundImage: `url(/podcast-banners/podcast1.jpg)`
            }}>
                <div className=' container'>
                    <div className='my-0 justify-center items-center flex mx-[-15px] flex-wrap'>
                        <div className=' max-w-[60%] basis-[60%] text-center'>
                            <h2 className='text-white'>{title}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex py-10 items-center bg-white'>
                <div className=' container'>
                    <div className='flex px-[-15px] flex-wrap'>
                        <div className=' flex mx-[15px] justify-center flex-wrap items-center'>
                            <h6 className='mb-0 opacity-75 text-gray-700'>FEATURED by</h6>
                            {
                                featuredBy.map((featuredByImg,ind)=>{
                                    return <Image alt={title} key={ind} className="h-auto my-3 mx-16" src={`/assets/${featuredByImg.url}`} blurDataURL={`/_next/image?url=/assets/${featuredByImg.url}&w=16&q=1`} height={51} width={featuredByImg.width} loading="lazy" decoding="async"></Image>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className=' py-5 bg-[#e9e8f0]'>
                <div className=' container'>
                    <div className='my-0 justify-center items-center flex mx-[-15px] flex-wrap'>
                        <div className='flex w-[940px] mr-0 ml-4 pr-0 md:pr-12 pl-0 items-center justify-center flex-wrap md:flex-nowrap rounded overflow-hidden bg-white shadow-sm'>
                            <div className=' relative w-full md:w-fit'>
                                <div className='relative overflow-hidden md:w-[270px] md:h-[296px] grow-0 shrink-0 basis-auto w-full h-full'>
                                    <Image className='w-full max-w-none' alt={feedBack.name} src={`/case-studies-resource/${feedBack.image}`} blurDataURL={`/_next/image?url=/case-studies-resource/${feedBack.image}&w=16&q=1`} height={270} width={270} loading="lazy" decoding="async"></Image>
                                </div>
                                <div className=' absolute left-0 right-0 top-auto bottom-0 z-[1]'>
                                    <div className=' relative top-0 z-[1] -mb-1 pt-[6px] pb-1 px-3 float-left bg-brand-600 flex items-center rounded-tr-md'>
                                        <h5 className=' text-white pr-2 float-left mb-0'>{feedBack.name}</h5>
                                        {
                                            feedBack.profile && <a href={feedBack.profile} target="_blank" className='py-[3px] flex mb-0 ml-2 justify-center items-start max-w-full bg-transparent'>
                                                <Image src={linkedin} alt="LinkedIn" width={16}></Image>
                                            </a>
                                        }
                                    </div>
                                    <div className='top-0 w-full mb-0 clear-left relative z-[1] inline-block py-2 px-3 float-left bg-brand-600'>
                                        <p className=' opacity-70 text-white mb-0 text-xs'>{feedBack.position}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' relative ml-0 md:ml-12 mt-6 md:mt-0'>
                                <Image className=' absolute left-2/4 -translate-x-2/4 md:translate-x-0 scale-75 md:scale-100 md:-left-6 -top-4 z-10' src={quote} alt="experience"></Image>
                                <div className=' relative z-20'>
                                    <p className='mb-0 text-center text-sm md:text-base md:text-left px-5 pb-5 md:px-0 md:pb-0'>{feedBack.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' py-24'>
                <div className=' container'>
                    <div className=' justify-center my-0 items-center flex mx-[-15px] flex-wrap mb-10 lg:mb-0 flex-col-reverse lg:flex-row'>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <Image src={`/case-studies-resource/${mainImage}`} alt="The Problem" height={273} width={570}></Image>
                        </div>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <div className=' mb-0 text-center lg:text-left flex flex-col'>
                                <h3>The Problem</h3>
                                <div>
                                    {
                                        typeof (problem) == 'string' ? <p>{problem}</p> : problem.map((item, ind) => {
                                            return <p key={ind}>{item}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' justify-center my-0 items-center flex mx-[-15px] flex-wrap mb-10 lg:mb-0 flex-col lg:flex-row'>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <div className=' mb-0 text-center lg:text-left flex flex-col'>
                                <h3>The Approach</h3>
                                <div>
                                    {
                                        typeof (approach) == 'string' ? <p>{approach}</p> : approach.map((item, ind) => {
                                            return <p key={ind}>{item}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <Image src={`/case-studies-resource/${approachImg}`} alt="The Approach" height={273} width={570}></Image>
                        </div>
                    </div>

                    <div className=' justify-center my-0 items-center flex mx-[-15px] flex-wrap mb-10 lg:mb-0 flex-col-reverse lg:flex-row'>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <Image src={`/case-studies-resource/${resultImg}`} alt="The Result" height={273} width={570}></Image>
                        </div>
                        <div className=' mb-4 px-[15px] flex-1'>
                            <div className=' mb-0 text-center lg:text-left flex flex-col'>
                                <h3>The Result</h3>
                                <div>
                                    {
                                        typeof (result) == 'string' ? <p>{result}</p> : result.map((item,ind)=>{
                                            return <p key={ind}>{item}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' pb-24'>
                <div className=' container'>
                    <div className=' justify-center my-0 items-center flex mx-[-15px] flex-wrap'>
                        <div className=' max-w-full basis-full md:max-w-[66.66667%] md:basis-[66.66667%] mb-4 px-[15px] flex-1'>
                            <div className=' mb-0 text-left flex flex-col'>
                                <h3 className=' text-center sm:text-left'>TechNologies Used</h3>
                                <div>
                                    <p>
                                        <strong>TechNologies Used</strong>
                                    </p>
                                    {
                                        techs.map((tech, ind) => {
                                            return <p key={ind}>
                                                <em>{tech}</em>
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
