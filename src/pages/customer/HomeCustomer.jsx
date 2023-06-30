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
	const [loadingNews, setLoadingNew] = useState(true);
	const [loadingRec, setLoadingRec] = useState(true);
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
					setLoadingNew(false);
				}
			})
			.catch((err) => {
				setOpenDialogs({ ...openDialogs, err: true });
				setLoadingNew(false);
			});
		API.get('suggestion/')
			.then((response) => {
				if (response.status === 200) {
					setDataRec(response.data.suggested_products);
					setLoadingRec(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setOpenDialogs({ ...openDialogs, err: true });
				setLoadingRec(false);
			});
	}, []);

	return (
		<main className='p-3 md:flex'>
			{loadingNews ? (
				<div className='flex justify-center m-auto h-full'>
					<Loader />
				</div>
			) : (
				<News dataNews={dataNews} />
			)}
			{loadingRec ? (
				<div className='flex justify-center m-auto'>
					<Loader />
				</div>
			) : (
				<Recomendations dataProducts={dataRec} />
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorNotFound} />
		</main>
	);
};

export default HomeCustomer;
