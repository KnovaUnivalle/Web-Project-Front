import Loader from '../components/tools/Loader';

const Loading = () => {
	return (
		<div className='w-full h-screen min-h-screen flex align-middle justify-center'>
			<div className='my-auto'>
				<Loader color='#000000' />
			</div>
		</div>
	);
};

export default Loading;
