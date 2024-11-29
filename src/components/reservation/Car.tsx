import MoreButton from './MoreButton';
import TabButton from './TabButton';
import { BagIcon, CarDoorIcon, HeartIcon, ProfileBlackIcon } from '@/assets/svg';
import { useState } from 'react';
import styled from 'styled-components';

const Car = () => {
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
	const handleFilterClick = (filter: string) => {
		setSelectedFilter(filter === selectedFilter ? null : filter);
	};

	return (
		<CarContainer>
			<Title>렌트카</Title>
			<TabButtonContainer>
				<TabButton
					content={'소형차'}
					isClicked={selectedFilter === '소형차'}
					onClick={() => handleFilterClick('소형차')}
				/>
				<TabButton
					content={'중형차'}
					isClicked={selectedFilter === '중형차'}
					onClick={() => handleFilterClick('중형차')}
				/>
				<TabButton
					content={'승합차'}
					isClicked={selectedFilter === '승합차'}
					onClick={() => handleFilterClick('승합차')}
				/>
				<TabButton content={'SUV'} isClicked={selectedFilter === 'SUV'} onClick={() => handleFilterClick('SUV')} />
				<TabButton
					content={'대형차'}
					isClicked={selectedFilter === '대형차'}
					onClick={() => handleFilterClick('대형차')}
				/>
			</TabButtonContainer>
			<Card>
				<Top>
					<LeftSection>
						<CarName>미니</CarName>
						<Icon>
							<ProfileBlackIcon /> <p>좌석 4개</p>
						</Icon>
						<Icon>
							<BagIcon /> <p>짐 1개</p>
						</Icon>
						<Icon>
							<CarDoorIcon />
							<p>2-3도어</p>
						</Icon>
					</LeftSection>
					<RightSection>
						<Scaled>
							<HeartIcon />
						</Scaled>
						<CarImg src="/src/assets/img/img_car.png" alt='자동차 이미지' />
					</RightSection>
				</Top>
				<Price>₩266,507</Price>
			</Card>
			<MoreButton />
		</CarContainer>
	);
};

export default Car;

const CarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	margin: 3.3rem 0 1.7rem 0;
`;

const Title = styled.h1`
	${({ theme }) => theme.fonts.head3_eb_24};
`;

const TabButtonContainer = styled.div`
	display: flex;
	gap: 0.7rem;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 36.2rem;
	height: 21.5rem;
	padding: 1.5rem 0.9rem;
	background-color: ${({ theme }) => theme.colors.white};
`;

const LeftSection = styled.div`
	width: 100%;
	padding: 2.3rem 0 2.5rem 0;
`;

const CarName = styled.p`
	${({ theme }) => theme.fonts.title1_eb_20};
	margin-bottom: 0.6rem;
`;

const Icon = styled.div`
	display: flex;

	align-items: center;
	${({ theme }) => theme.fonts.body5_r_14};
	color: ${({ theme }) => theme.colors.gray40};

	& p {
		margin-top: 0.5rem;
	}
`;

const Top = styled.div`
	display: flex;
`;
const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const Price = styled.p`
	border-top: 1px solid ${({ theme }) => theme.colors.grey30};
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	justify-content: end;
	${({ theme }) => theme.fonts.e_title_eb_16};
`;

const Scaled = styled.div`
	transform: scale(2);
	padding: 0.3rem;
`;

const CarImg = styled.img``;
