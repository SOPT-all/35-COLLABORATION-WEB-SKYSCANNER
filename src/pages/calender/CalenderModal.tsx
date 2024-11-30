import { ArrowLeftBlackIcon, InfoIcon, OneWayIcon, TwoWayIcon } from '@/assets/svg';
import Calender from '@/components/home/Calender.tsx';
import PriceImage from '@/components/home/PriceImage.tsx';
import PriceModal from '@/components/home/PriceModal.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { dateHandler } from '@/utils/dateHandler.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CalenderModal = () => {
	const { firstSelectedDate, lastSelectedDate, handleSetDate, handleNavigate } = dateHandler();
	const [filter, setFilter] = useState<'round' | 'oneway'>('round');
	const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
	const onPriceModalToggle = () => {
		setIsPriceModalOpen((prev) => !prev);
	};
	const onFilterClick = (filter: 'round' | 'oneway') => {
		setFilter(filter);
	};
	const navigate = useNavigate();

	return (
		<CalenderContainer>
			<ContentsWrap>
				<Header>
					<ArrowLeftBlackIcon
						onClick={() => {
							navigate(-1);
						}}
					/>
					<ModalTitle>날짜 선택</ModalTitle>
				</Header>
				<Information>
					<InforTitle>서울 - 오키나와</InforTitle>
					<InfoFilter>
						<InfoFilterLeft onClick={() => onFilterClick('round')} filter={filter}>
							<TwoWayIcon />
							왕복
						</InfoFilterLeft>
						<InfoFilterRight onClick={() => onFilterClick('oneway')} filter={filter}>
							<OneWayIcon />
							편도
						</InfoFilterRight>
					</InfoFilter>
					<InfoFilter>
						<InfoGoLeft>
							<InfoGoTitle>가는 편</InfoGoTitle>
							<InfoGoContent date={firstSelectedDate}>
								{firstSelectedDate ? firstSelectedDate : '가는 날을 선택해주세요'}
							</InfoGoContent>
						</InfoGoLeft>
						<InfoGoRight>
							<InfoGoTitle>오는 편</InfoGoTitle>
							<InfoGoContent date={lastSelectedDate}>
								{lastSelectedDate ? lastSelectedDate : '오는 날을 선택해주세요'}
							</InfoGoContent>
						</InfoGoRight>
					</InfoFilter>
				</Information>
				<CalenderInfo>
					<PriceImage contents={'₩'} color={'green'} />
					<PriceImage contents={'₩₩'} color={'orange'} />
					<PriceImage contents={'₩₩₩'} color={'red'} />
					<InfoIcon onClick={onPriceModalToggle} />
				</CalenderInfo>
			</ContentsWrap>
			<Calender handleSetDate={handleSetDate} handleNavigate={handleNavigate} />
			<PriceModal isVisible={isPriceModalOpen} onModalClose={onPriceModalToggle} />
		</CalenderContainer>
	);
};

const CalenderContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.white};
	position: absolute;
	top: 0;
`;

const ContentsWrap = styled.div`
	${flexCssGenerator('column')}
	padding: 1.9rem;
`;

const Header = styled.header`
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: 0.1fr 1fr 0.1fr;
	width: 100%;
`;

const ModalTitle = styled.h2`
	justify-self: center;
	${({ theme }) => theme.fonts.btn1_eb_12}
`;

const Information = styled.section`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	margin: 1.4rem 0 2.4rem;
	gap: 1rem;
`;

const InforTitle = styled.h3`
	${({ theme }) => theme.fonts.btn1_eb_12}
`;

const InfoFilter = styled.div`
	${flexCssGenerator('flex', 'center')}
	gap: 0.3rem;
`;

const InfoFilterButton = styled.button<{ filter: 'round' | 'oneway' }>`
	${flexCssGenerator('flex', 'center', 'center')}
	gap: 0.3rem;
	${({ theme }) => theme.fonts.body6_r_12}
	width: 16.7rem;
	height: 2.6rem;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const InfoFilterLeft = styled(InfoFilterButton)`
	border-radius: 6px 0px 0px 6px;
	color: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.black)};
	background: ${({ filter, theme }) => (filter === 'round' ? theme.colors.darksky : theme.colors.white)};
	& > svg {
		& > path {
			stroke: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.black)};
		}
	}
`;

const InfoFilterRight = styled(InfoFilterButton)`
	border-radius: 0px 6px 6px 0px;
	color: ${({ filter, theme }) => (filter === 'round' ? theme.colors.black : theme.colors.white)};
	background: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.darksky)};
	& > svg {
		& > path {
			stroke: ${({ filter, theme }) => (filter === 'round' ? theme.colors.black : theme.colors.white)};
		}
	}
`;

const InfoGoBase = styled.div`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	width: 167px;
	flex-shrink: 0;
	background: ${({ theme }) => theme.colors.skygrey};
	padding: 1.2rem 1.7rem;
	gap: 0.6rem;
`;

const InfoGoLeft = styled(InfoGoBase)`
	border-radius: 12px 2px 2px 12px;
`;

const InfoGoRight = styled(InfoGoBase)`
	border-radius: 2px 12px 12px 2px;
`;

const InfoGoTitle = styled.h3`
	${({ theme }) => theme.fonts.btn1_eb_12}
	color: ${({ theme }) => theme.colors.grey40};
`;

const InfoGoContent = styled.div<{ date: string | null }>`
	${({ theme }) => theme.fonts.e_body_m_12}
	color: ${({ theme, date }) => (date ? theme.colors.black : theme.colors.grey30)};
	height: 1.7rem;
`;

const CalenderInfo = styled.section`
	${flexCssGenerator('flex', 'flex-start', 'center')} //margin: 1.4rem 0;
	gap:0.3rem;
	& > div {
		width: fit-content;
	}
`;

export default CalenderModal;
