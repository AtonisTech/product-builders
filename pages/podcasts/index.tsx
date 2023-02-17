import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import data from '../../data/podcasts.json';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import orgData from '../../data/organization.json';

interface PodCastMeta {
    title: string,
    createdAt: string,
    bannerImage: string,
    authorName: string,
    authorImage: string,
    authorDisc: string,
    spotifyEmbed?: string,
    soundCloudEmbed?: string,
    listBanner:string,
    listContent:string,
}

interface Podcast extends PodCastMeta {
    content: string;
    slug:string;
};


const podcastsDirectory = path.join(process.cwd(), '/data/podcast');

export const getStaticProps: GetStaticProps<{ posts: Podcast[] }> = async (
    context
) => {
    try {
        const filenames = await fs.readdirSync(podcastsDirectory);

        const posts = filenames.map((fileName) => {
            const fileNamePath = fs.readFileSync(
                podcastsDirectory + `/${fileName}`,
                'utf8'
            );
            const { data: frontmatter, content } = matter(fileNamePath);
            return {
                ...frontmatter,
                content,
                slug: fileName.replace('.md', '')
            } as Podcast;
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
                <title>PodCasts - {orgData.name}</title>
                <meta name="description" content={`PodCasts from ${orgData.name}`} />
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
                    <div className='space-x-4 space-y-4'>
                        {
                            data.platforms.map((platform,ind)=>{
                                return <Image className='' src={`/podcast-platforms/${platform}`} key={ind} width={40} height={40} alt=""></Image>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='mb-[40px]'>
                <div>
                    <div>
                        {
                            posts.map((post, ind) => {
                                return <div key={ind} className='flex mt-[40px] flex-col space-y-6 md:space-y-0 md:flex-row'>
                                    <Image src={require(`../../public/podcast-platforms/${post.listBanner}`)} alt="" className='w-full md:w-[40%] h-full mt-auto mb-auto rounded-r'></Image>
                                    <div className='flex pt-0 pl-8 pr-8 md:pl-[60px] flex-col justify-center items-start flex-1 space-y-6'>
                                        <h5>{post.title}</h5>
                                        <p>{post.listContent}</p>
                                        <Link href={`/podcast/${post.slug}`} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block">
                                            <span className="absolute top-0 right-0 group-hover:left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full group-hover:opacity-90"></span>
                                            <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">Listen</span>
                                        </Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'></div>
            </div>
        </>
    );
};

export default Page;