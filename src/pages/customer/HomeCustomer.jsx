import { useEffect, useState } from 'react';
import News from '../../components/carousel/News';
import Recomendations from '../../components/sections/Recomendations';
import {} from 'react';
import API from '../../utils/API';
import InfoDialog from '../../components/dialogs/InfoDialog';
import { errorNotFound } from '../../utils/MSG';
import Loader from '../../components/tools/Loader';

const HomeCustomer = () => {
	const [dataNews, setDataNews] = useState([]);
	const [dataRec, setDataRec] = useState([]);
	const [loading, setLoading] = useState({ news: true, rec: true });
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
	});

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	useEffect(() => {
		API.get('news/customer/')
			.then((response) => {
				if (response.status === 200) {
					setDataNews(response.data);
					setLoading({ ...loading, news: false });
				}
			})
			.catch((err) => {
				setOpenDialogs({ ...openDialogs, err: true });
				setLoading({ ...loading, news: false });
			});
	}, []);

	return (
		<main className='px-3 md:flex'>
			{loading.news ? (
				<div className='flex justify-center m-auto'>
					<Loader />
				</div>
			) : (
				<News dataNews={dataNews} />
			)}
			<Recomendations />
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorNotFound} />
		</main>
	);
};

export default HomeCustomer;
