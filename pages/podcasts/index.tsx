import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/podcasts.json';
import podcastImg from '../../public/podcast-platforms/podcast1.png';

const Page: NextPage = () => {
    return (
        <>
            <div className=' flex w-full h-[300px] justify-center items-center gap-x-4 gap-y-4 bg-brand-600 text-center'>
                <div className='container pt-16'>
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
                        <div className='flex mt-[40px]'>
                            <Image src={podcastImg} alt="" className='w-[40%] h-full mt-auto mb-auto rounded-r'></Image>
                            {
                                data.posts.map((post,ind)=>{
                                    return <div key={ind} className='flex pt-0 pl-[60px] flex-col justify-center items-start flex-1 space-y-6'>
                                        <h5>{post.title}</h5>
                                        <p>{post.content}</p>
                                        <Link href={post.url} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sec-brand-600 inline-block">
                                            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent-600 group-hover:w-full opacity-90"></span>
                                            <span className="relative group-hover:text-white text-xs font-semibold tracking-[1px] uppercase">Listen</span>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'></div>
            </div>
        </>
    );
};

export default Page;