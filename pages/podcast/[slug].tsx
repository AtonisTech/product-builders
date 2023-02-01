import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import md from 'markdown-it';
import matter from "gray-matter";
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
    soundCloudEmbed?: string
}

interface Podcast extends PodCastMeta {
    content: string;
};

const podcastDirectory = path.join(process.cwd(), '/data/podcast');

export const getStaticPaths: GetStaticPaths = async () => {
    const filenames = await fs.readdirSync(podcastDirectory);

    return {
        paths: filenames.map((filename) => ({
            params: { slug: filename.replace('.md', '') },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ data: Podcast }> = async (
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
            podcastDirectory + `/${params.slug}.md`,
            'utf8'
        );
        const { data: frontmatter, content } = matter(fileName);
        const objectData = {
            ...frontmatter as PodCastMeta,
            content
        }

        return {
            props: { data: objectData },
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
        createdAt,
        content,
        bannerImage,
        authorName,
        authorImage,
        authorDisc,
        spotifyEmbed,
        soundCloudEmbed
    } = data;

    return (
        <>
            <Head>
                <title>{title} - {orgData.name}</title>
                <meta name="description" content={`${title} podcast from ${orgData.name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-96.png" />
            </Head>
            <section className="flex justify-center items-center gap-x-4 gap-y-4 mt-[64px] py-20 bg-brand-600 bg-fixed" style={{
                backgroundPosition: '0 0,50% 100%',
                backgroundSize: 'auto, cover',
                backgroundRepeat: 'repeat,no-repeat',
                backgroundAttachment: 'scroll,fixed',
                backgroundImage: `url(/podcast-banners/${bannerImage})`
            }}>
                <div className=' container'>
                    <div className='my-0 justify-center items-center flex mx-[-15px] flex-wrap'>
                        <div className=' max-w-[60%] basis-[60%] text-center'>
                            <h2 className='text-white'>{title}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' bg-[#e9e8f0] py-10'>
                <div className=' container'>
                    <div className='my-0 justify-center items-center flex mx-[-15px] flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0'>
                        <div className='space-y-6 flex flex-col items-center lg:items-start'>
                            <Image alt={title} src={`/podcast-banners/${authorImage}`} blurDataURL={`/_next/image?url=/podcast-banners/${authorImage}&w=16&q=1`} height={263} width={263} className="rounded shadow-xl max-w-full" loading="lazy" decoding="async"></Image>
                            <div className=' space-y-3 flex flex-col items-center lg:items-start'>
                                <h4>{authorName}</h4>
                                <div className='text-center'>{authorDisc}</div>
                            </div>
                        </div>
                        <div className='px-10 space-y-5'>
                            <div>
                                {
                                    soundCloudEmbed && <iframe
                                        className=' rounded-xl px-4 py-2 bg-brand-600'
                                        width="100%"
                                        height="166"
                                        src={soundCloudEmbed}
                                    ></iframe>
                                }
                            </div>
                            <div>
                                {
                                    spotifyEmbed && <iframe 
                                        className=' rounded-xl'
                                        src={spotifyEmbed} 
                                        width="100%" 
                                        height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                    ></iframe>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-24'>
                <div className=' container'>
                    <div className=' flex mx-[-15px] flex-wrap'>
                        <div className='max-w-full basis-full lg:max-w-[66.6%] lg:basis-[66.6%] mb-4 px-[15px] flex-1'>
                            <div className="prose prose-blue max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
