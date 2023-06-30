import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import API from '../../utils/API';
import ProductCard from '../../components/card/ProductCard';
import Loader from '../../components/tools/Loader';
import InfoDialog from '../../components/dialogs/InfoDialog';
import AuthDialog from '../../components/dialogs/AuthDialog';
import { errorNotFoundProducts, errorProducts } from '../../utils/MSG';

const ResultsCustomer = () => {
	const [dataProducts, setDataProducts] = useState([]);
	const [page, setPage] = useState();
	const [countPage, setCountPage] = useState(null);
	const [loading, setLoading] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		notFound: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useLocation().search;

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: false });
	};

	const handlePage = (event, value) => {
		setPage(value);
		setSearchParams({ page: value, product: searchParams.get('product') });
	};

	useEffect(() => {
		setLoading(true);
		API.get(`scraping/${params}`)
			.then((response) => {
				if (response.status === 200) {
					const { results, count } = response.data;
					setDataProducts(results);
					setLoading(false);
					if (!countPage) {
						setPage(Number(searchParams.get('page')));
						setCountPage(Math.ceil(count / 20));
					}
				}
			})
			.catch((err) => {
				if (err.response) {
					switch (err.response.status) {
						case 401:
							setOpenDialogs({ ...openDialogs, noAuthenticated: true });
							break;
						case 403:
							setOpenDialogs({ ...openDialogs, NoAuthorized: true });
							break;
						case 404:
							setOpenDialogs({ ...openDialogs, notFound: true });
							break;
						default:
							setOpenDialogs({ ...openDialogs, err: true });
							break;
					}
				} else {
					setOpenDialogs({ ...openDialogs, err: true });
				}
				setLoading(false);
			});
	}, [searchParams]);

	return (
		<main>
			{loading ? (
				<div className='flex justify-center m-auto'>
					<Loader />
				</div>
			) : (
				<>
					<div className='p-3 lg:px-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-evenly'>
						{dataProducts.map((dataProduct, index) => (
							<div className='md:w-5/12' key={`product${index}`}>
								<ProductCard dataProduct={dataProduct} />
							</div>
						))}
					</div>
					<div className='flex justify-center m-auto p-7'>
						<Pagination count={countPage} page={page} onChange={handlePage} color='primary' />
					</div>
				</>
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorProducts} />
			<InfoDialog
				close={closeNotFound}
				open={openDialogs.notFound}
				message={errorNotFoundProducts}
			/>
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</main>
	);
};

export default ResultsCustomer;
