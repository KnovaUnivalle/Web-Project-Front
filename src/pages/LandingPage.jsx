import LandHeader from '../components/headers/LandHeader';
import LandFooter from '../components/footers/LandFooter';
import LandRouter from '../routes/LandRouter';

const LandingPage = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<LandHeader />
			<LandRouter />
			<LandFooter />
		</div>
	);
};

export default LandingPage;
