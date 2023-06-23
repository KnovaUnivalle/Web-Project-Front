const FormContainter = ({ children }) => {
	return (
		<div className='flex flex-col justify-center align-middle m-auto w-3/4 h-screen md:w-2/3 lg:w-1/3'>
			{children}
		</div>
	);
};

export default FormContainter;