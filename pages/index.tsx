import Head from 'next/head'
import Grid from '@components/Grid'
import TechCard from '@components/TechnologyCard'
import HeroSection from '@components/HeroSection';
import featuredData from '../data/featured.json';
import Link from 'next/link';
import Image from 'next/image';
import HexBgSection from '@components/HexBgSection';
import orgData from '../data/organization.json';

export default function Home() {
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
		</>
	)
}
