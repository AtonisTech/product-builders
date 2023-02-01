import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import data from '../../data/case-studies.json';
import fs from 'fs';
import orgData from '../../data/organization.json';
import Head from 'next/head';

interface CaseStudyMeta {
    title: string,
    listViewDesc: string,
    mainImage: string,
    featuredBy: { url: string, width: number }[],
    feedBack: {
        name: string,
        position: string,
        image: string,
        profile: string,
        content: string
    },
    problem: string,
    approach: string,
    result: string,
    techs: string[]
}

interface CaseStudy extends CaseStudyMeta {
    slug:string;
};


const CaseStudiesDirectory = path.join(process.cwd(), '/data/case-studies');

export const getStaticProps: GetStaticProps<{ posts: CaseStudy[] }> = async (
    context
) => {
    try {
        const filenames = await fs.readdirSync(CaseStudiesDirectory);

        const posts = filenames.map((fileName) => {
            const fileNamePath = fs.readFileSync(
                CaseStudiesDirectory + `/${fileName}`,
                'utf8'
            );
            return {
                ...JSON.parse(fileNamePath),
                slug: fileName.replace('.json', '')
            } as CaseStudy;
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

const Page = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Case studies - {orgData.name}</title>
                <meta name="description" content={`Case studies from ${orgData.name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-96.png" />
            </Head>
            <div className=' flex w-full pt-24 pb-8 justify-center items-center gap-x-4 gap-y-4 bg-brand-600 text-center'>
                <div className='container'>
                    <h3 className='text-white text-center'>{data.title}</h3>
                    {
                        data.content.map((item,ind)=>{
                            return <div key={ind} className="mb-0 text-[#f09ca6] text-lg">{item}</div>
                        })
                    }
                </div>
            </div>
            <div className='py-20'>
                <div className=' space-y-10'>
                    {
                        posts.map((post,ind)=>{
                            return <div key={ind}>
                                <div className=' container flex flex-col md:flex-row space-y-5 md:space-y-0'>
                                    <Image className=' rounded-[5px] w-full md:w-[40%] h-full mx-auto ' width={477} height={283} src={`/case-studies-resource/${post.mainImage}`} alt={post.title}></Image>
                                    <div className='flex pt-0 pl-0 space-y-3 md:pl-[60px] flex-col justify-center items-start flex-1'>
                                        <h2>{post.title}</h2>
                                        <p>{post.listViewDesc}</p>
                                        <Link href={`/case-study/${post.slug}`} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block">
                                            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full opacity-90"></span>
                                            <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">Read more</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Page;