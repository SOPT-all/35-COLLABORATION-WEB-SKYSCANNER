import { getFlights } from '@/api/reservation/getFlights';
import { FlightApiResponse, Flights } from '@/types/FlightTypes';
import { useEffect, useState } from 'react';

export const useFlights = () => {
	const [flights, setFlights] = useState<Flights[]>([]);

	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWishList = async () => {
			try {
				const data: FlightApiResponse = await getFlights();
				setFlights(data.flights);
			} catch (err) {
				setError('Failed to fetch wish list.');
				console.log(error);
			}
		};

		fetchWishList();
	}, []);

	return { flights };
};

export const fetchMoreFlights = async (): Promise<Flights[]> => {
	const response: FlightApiResponse = await getFlights(); // API 호출
	return response.flights;
};
