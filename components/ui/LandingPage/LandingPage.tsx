import Image from 'next/image';
import Link from 'next/link';
import Twitter from 'public/twitter-icon.png';
import Github from 'public/github-icon.png';
import {
	LandingPageWrapper,
	TeamMemberWrapper,
	ImageWrapper,
	ImageOverlay,
	TextWrapper,
	SocialMediaWrapper,
	TeamMembers,
	InfoWrapper,
} from './styles';
// import Video from 'public/wonderarena.mp4';

interface TeamMember {
	name: string;
	discord: string;
	role: string;
	github: string;
	twitter: string;
	profileImage: string;
}

const teamMembers: TeamMember[] = [
	{
		name: 'Lanford',
		discord: 'lanford33#2178',
		role: 'Tech Lead',
		github: 'https://github.com/LanfordCai',
		twitter: 'https://twitter.com/33_labs',
		profileImage:
			'https://pbs.twimg.com/profile_images/1595726147995992064/x-_J9YHM_400x400.png',
	},
	{
		name: 'bz',
		discord: 'bz#0780',
		role: 'Product Lead',
		github: 'https://github.com/bz-hashtag-0780',
		twitter: 'https://twitter.com/bz_bbclub',
		profileImage:
			'https://pbs.twimg.com/profile_images/1422488690840977416/KW-bJB5__400x400.png',
	},
	{
		name: 'Suurikat',
		discord: 'SuuriKat#1514',
		role: 'Game Lead',
		github: 'https://github.com/SuuriKat',
		twitter: 'https://twitter.com/SuuriKat',
		profileImage:
			'https://pbs.twimg.com/profile_images/1484224808976068610/0nv3FGRZ_400x400.jpg',
	},
	{
		name: 'williblue',
		discord: 'williblue#6436',
		role: 'Design Lead',
		github: 'https://github.com/williblue',
		twitter: 'https://twitter.com/williblueblue',
		profileImage:
			'https://pbs.twimg.com/profile_images/1624849321987395586/3tEV09Hr_400x400.png',
	},
];

const LandingPage = () => {
	return (
		<LandingPageWrapper>
			<a href="https://youtu.be/8k1NS_Ub3vM">
				<video
					src="/wonderarena.mp4"
					autoPlay
					muted
					loop
					style={{
						width: '100%',
						maxWidth: '50vw',
						borderRadius: '1%',
					}}
				/>
			</a>
			<InfoWrapper>
				<h1>Welcome to Wonder Arena</h1>
				<p>
					Wonder Arena is an NFT gaming platform with a vision to
					create a seamless and accessible gaming experience for
					mainstream audiences. It offers a walletless onboarding
					approach and a unique rewards system, allowing users to
					build their own NFT-based games.
				</p>
				<h2>Meet the Team</h2>
			</InfoWrapper>
			<TeamMembers>
				{teamMembers.map((member) => (
					<TeamMemberWrapper key={member.name}>
						<ImageWrapper>
							<Image
								loader={({ src }) => src}
								src={member.profileImage}
								alt={member.name}
								width={100}
								height={100}
							/>
						</ImageWrapper>
						<TextWrapper>
							<h3>{member.name}</h3>
							<i>{member.role}</i>
							{/* <p>{member.discord}</p> */}
							<SocialMediaWrapper>
								<Link href={member.github} passHref>
									<Image
										src={Github.src}
										alt="Github"
										width={30}
										height={30}
									/>
								</Link>
								<Link href={member.twitter} passHref>
									<Image
										src={Twitter.src}
										alt="Twitter"
										width={30}
										height={30}
									/>
								</Link>
							</SocialMediaWrapper>
						</TextWrapper>
					</TeamMemberWrapper>
				))}
			</TeamMembers>
		</LandingPageWrapper>
	);
};
export default LandingPage;
