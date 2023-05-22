const Detective = ({ url = '/' }) => {
	return (
		<a className='flex flex-row justify-center' href='/home'>
			<img className='w-12 p-1' src='/logo.svg' alt='Logo de Detective' />
			<img className='w-20' src='/logo_letter.svg' alt='Detective' />
		</a>
	);
};

export default Detective;
