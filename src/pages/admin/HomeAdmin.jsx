import { useEffect, useState } from 'react';
import CustomLineChart from '../../components/charts/CustomLineChart';
import ShortUsers from '../../components/sections/ShortUsers';
import { GRAPHICS_ADMIN_PATH } from '../../utils/PATH';
import API from '../../utils/API';
import InfoDialog from '../../components/dialogs/InfoDialog';
import AuthDialog from '../../components/dialogs/AuthDialog';
import { errorNotFoundUser, errorUser } from '../../utils/MSG';
import Loader from '../../components/tools/Loader';

const HomeAdmin = () => {
	const [dataUsers, setDataUsers] = useState([]);
	const [loadingTable, setLoadingTable] = useState(false);
	const [loadingGraph, setLoadingGraph] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		notFound: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: false });
	};

	useEffect(() => {
		setLoadingTable(true);
		API.get('users/?last=true')
			.then((response) => {
				if (response.status === 200) {
					setDataUsers(response.data);
					setLoadingTable(false);
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
				setLoadingTable(false);
			});
	}, []);

	return (
		<>
			{loadingTable ? (
				<div className='flex justify-center my-20 m-auto'>
					<Loader />
				</div>
			) : (
				<ShortUsers dataUsers={dataUsers} />
			)}
			{loadingTable ? (
				<div className='flex justify-center my-20 m-auto'>
					<Loader />
				</div>
			) : (
				<CustomLineChart to={GRAPHICS_ADMIN_PATH} title='Consultas Hoy' />
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorUser} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundUser} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</>
	);
};

export default HomeAdmin;
