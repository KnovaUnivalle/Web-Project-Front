import { useEffect, useState } from 'react';
import News from '../../components/carousel/News';
import Recomendations from '../../components/sections/Recomendations';
import {} from 'react';
import API from '../../utils/API';

const HomeCustomer = () => {
	const [dataNews, setDataNews] = useState([]);
	const [dataRec, setDataRec] = useState([]);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		errGen: false,
	});

	useEffect(() => {
		API.get('news/customer/')
			.then((response) => {
				if (response.status === 200) {
					setDataNews(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err.response) {
					if (err.response.status === 400) {
						setOpenDialogs({ ...openDialogs, err: true });
					}
				} else {
					console.log(err);
					setOpenDialogs({ ...openDialogs, errGen: true });
				}
			});
	}, []);

	return (
		<main className='px-3 md:flex'>
			<News dataNews={dataNews} />
			<Recomendations />
		</main>
	);
};

export default HomeCustomer;