import FlightCard from '@/components/reservation/FlightCard';
import { fetchMoreFlights, useFlights } from '@/hooks/useFlights';
import { Flights } from '@/types/FlightTypes';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const FlightList = () => {
	// 초기 항공권 데이터, 5개
	const { flights: initialFlights } = useFlights();

	// 무한 스크롤 상태
	const [loading, setLoading] = useState(false);
	const [flights, setFlights] = useState<Flights[]>([]);
	const [initialLoad, setInitialLoad] = useState(true);

	// 처음 데이터 로딩 처리
	useEffect(() => {
		if (initialFlights.length > 0 && initialLoad) {
			setFlights(initialFlights);
			setInitialLoad(false);
		}
	}, [initialFlights, initialLoad]);

	// 데이터를 더 불러옴
	const loadMoreFlights = useCallback(async () => {
		if (loading) return;
		setLoading(true);

		const moreFlights = await fetchMoreFlights();
		setFlights((prevFlights) => [...prevFlights, ...moreFlights]);

		setLoading(false);
	}, [loading]);

	// 스크롤 이벤트 핸들러
	const handleScroll = useCallback(
		(event: React.UIEvent<HTMLElement>) => {
			const target = event.target as HTMLElement;
			const { scrollTop, clientHeight, scrollHeight } = target;

			if (scrollTop + clientHeight >= scrollHeight - 1 && !loading) {
				loadMoreFlights();
			}
		},
		[loading, loadMoreFlights],
	);

	return (
		<FlightContainer onScroll={handleScroll}>
			{flights.map((flight) => (
				<FlightCard key={flight.id} flight={flight} />
			))}
			{loading && <LoadingIndicator>로딩 중...</LoadingIndicator>}
		</FlightContainer>
	);
};

export default FlightList;

const FlightContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	overflow-y: auto;
	max-height: 72.5rem;
	min-height: 30rem;
`;

const LoadingIndicator = styled.div`
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.colors.grey40};
	font-size: 1%.5;
`;
