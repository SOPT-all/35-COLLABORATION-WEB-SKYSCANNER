import ContentsTop from './ContentsTop';
import FAQBox from './FAQBox';
import PlanContents from './PlanContents';
import RecommendCard from './RecommendCard';
import RecommendComments from './RecommendComments';
import {
	ArrowRightGreyIcon,
	CalendarBlackIcon,
	FlightBlackIcon,
	HotelBlackIcon,
	NameTagIcon,
	TicketIcon,
} from '@/assets/svg';
import { useRecommendList } from '@/hooks/useRecommendList';
import { faqs } from '@/mocks/mockFAQ';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

const HomeContents = () => {
	const { recommendList } = useRecommendList();

	return (
		<HomeContentsWrapper>
			<BreadCrumbs>
				<p>홈</p>
				<ArrowRightGreyIcon />
				<p>항공권</p>
			</BreadCrumbs>
			<ContentsTopWrapper>
				<ContentsTop
					Icon={<FlightBlackIcon />}
					content={[
						'출발지와 도착지에 상관없이 최저가 항공권을 검색하세요.',
						'추가 수수료 없이 간편하게 예약할 수 있습니다.',
					]}
				/>
				<ContentsTop
					Icon={<CalendarBlackIcon />}
					content={[
						'1,000개 이상의 항공권을 비교해보세요.',
						'가장 저렴한 항공권, 비행 시간이 짧은 항공권,',
						'탄소 배출량이 적은 항공권까지 원하는 기준으로 선택할 수 있어요.',
					]}
				/>
				<ContentsTop
					Icon={<NameTagIcon />}
					content={[
						'항공권이 가장 저렴한 달과 날짜를 찾아보고,',
						'원하는 가격이 나왔을 때를 놓치지 않도록 가격 변동 알림을 켜보세요.',
					]}
				/>
			</ContentsTopWrapper>
			<RecommendTitle>
				<h2>대한민국 출발 최저가 항공권</h2>
				<h3>
					가장 저렴한 가격의 특가 항공권을 만나보세요. 서둘러 예약하세요. <br />
					모두 앞으로 3개월 이내에 출발하는 항공권입니다.
				</h3>
			</RecommendTitle>
			<ContentsRecommendWrapper>
				<RecommendCardsWrapper>
					{recommendList.map((recommend) => (
						<RecommendCard key={recommend.id} {...recommend} />
					))}
				</RecommendCardsWrapper>
				<p className="special-price">특가 상품 접기</p>
				<RecommendComments
					title="스카이스캐너는 이런 특가 항공권을 어떻게 찾아냈을까요?"
					content={[
						'앞으로 3개월 내 출발하는 대한민국발 이코노미 항공편을',
						'한눈에 확인하세요. 평균 가격 대비 할인율이 가장 높은 항공권을',
						'추천해드립니다. 모든 정보는 최근 4일 내에 업데이트된 내용이며,',
						'가격은 실시간으로 변동될 수 있으니 서둘러 확인하세요!',
					]}
				/>
			</ContentsRecommendWrapper>
			<ContentsFAQWrapper>
				<FAQTitle>항공권 특가 찾기: 자주 묻는 질문</FAQTitle>
				<FAQBoxWrapper>
					{faqs.map((faq) => (
						<FAQBox key={faq.id} question={faq.question} />
					))}
				</FAQBoxWrapper>
				<ButtonWrapper>
					<AskButton>질문하러 가기</AskButton>
				</ButtonWrapper>
			</ContentsFAQWrapper>
			<CardBoardWrapper>
				<CardImg src="/src/assets/img/img_cardboard.png" alt="카드 이미지" />
			</CardBoardWrapper>
			<PlanWrapper>
				<PlanTitle>
					<h2>부담 없이 여행 계획하기</h2>
					<h3>
						여행 내내 순조롭게, 안심하고 여행하실 수 있도록
						<br />
						스카이스캐너가 도와드립니다.
					</h3>
				</PlanTitle>
				<PlanContents
					Icon={<TicketIcon />}
					Title="변경 가능한 항공권 특가 찾기"
					content={['항공편이 변경되거나 취소되어도 불이익을 받지 않는', '변경 가능한 항공권 특가를 둘러보세요.']}
				/>
				<PlanContents
					Icon={<HotelBlackIcon />}
					Title="호텔 및 렌터카 추가"
					content={['호텔과 렌터카를 예약하면서 여정을 계획하고,', '모든 예약을 한 곳에서 관리하세요.']}
				/>
			</PlanWrapper>
		</HomeContentsWrapper>
	);
};

export default HomeContents;

const HomeContentsWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	${flexCssGenerator('flex', '', '', 'column')}
`;
const BreadCrumbs = styled.div`
	${flexCssGenerator('flex', 'start', 'center', 'row')}
	padding: 1.5rem 0 2.9rem 1.2rem;

	p {
		${({ theme }) => theme.fonts.btn1_eb_12}
		color: ${({ theme }) => theme.colors.black}
	}

	p:nth-of-type(1) {
		color: ${({ theme }) => theme.colors.skyblue};
	}
`;
const ContentsTopWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	padding: 0 0 5.1rem 0.7rem;
	gap: 1.2rem;
`;

const ContentsRecommendWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
	gap:1.7rem;
	padding-bottom: 4.6rem;

	.special-price {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.skyblue}
	}
`;
const RecommendTitle = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 0.3rem;
	padding-left: 1.6rem;
	padding-bottom: 1.1rem;
	h2 {
		${({ theme }) => theme.fonts.title1_eb_20}
		color: ${({ theme }) => theme.colors.black}
	}
	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;
const RecommendCardsWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
	gap: 1.5rem;
`;

const ContentsFAQWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	padding: 0 1.3rem 4.1rem;
	gap: 1rem;
`;
const FAQTitle = styled.h1`
	${({ theme }) => theme.fonts.title1_eb_20}
	color: ${({ theme }) => theme.colors.black}
`;

const FAQBoxWrapper = styled.div``;

const ButtonWrapper = styled.div`
	width: 100%;
	${flexCssGenerator('flex', 'end', 'center', 'row')}
`;
const AskButton = styled.div`
	width: 9.6rem;
	border-radius: 7px;
	padding: 0.9rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.skyblue};
	${({ theme }) => theme.fonts.title3_eb_14}
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`;

const CardBoardWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
`;
const PlanWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}

	padding: 3.1rem 2rem 1.9rem;
	gap: 1.9rem;
`;
const PlanTitle = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 1rem;

	h2 {
		${({ theme }) => theme.fonts.title1_eb_20}
		color: ${({ theme }) => theme.colors.black}
	}

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14_new2}
		color: ${({ theme }) => theme.colors.black}
	}
`;

const CardImg = styled.img`
	width: 34.8rem;
	height: 117.3rem;
`;
