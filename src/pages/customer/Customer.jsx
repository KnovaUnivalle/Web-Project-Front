import { useNavigate } from 'react-router-dom';
import Detective from '../../components/buttons/Detective';
import Search from '../../components/forms/Search';
import LandMenu from '../../components/menus/LandMenu';
import Movil from '../../components/menus/Movil';
import CustomerRouter from '../../routes/CustomerRouter';
import { SEARCH_CUSTOMER_PATH, SIGN_IN_PATH } from '../../utils/PATH';

const pages = [{ title: 'Iniciar Sesión', id: SIGN_IN_PATH }];

const Customer = () => {
	const navigate = useNavigate();

	const handleSubmit = (data) => {
		navigate(`${SEARCH_CUSTOMER_PATH}?q=${data}`);
	};

	return (
		<>
			<header className='p-3 sm:pt-7 lg:px-12 '>
				<nav className='min-w-full'>
					<div className='flex justify-between'>
						<Detective />
						<LandMenu pages={pages} />
						<Movil pages={pages} />
					</div>
					<Search submitFunc={handleSubmit} />
				</nav>
			</header>
			<CustomerRouter />
		</>
	);
};

export default Customer;
