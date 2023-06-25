const NewsCard = ({ dataNew }) => {
	return (
		<div className='border-x border-t shadow-md p-2 my-auto'>
			<div>
				<img
					className='w-full mx-auto md:w-80 block'
					src={dataNew.image}
					alt='Imagen de noticia'
					loading='lazy'
				/>
			</div>
			<h2 className='text-xl font-bold font-serif lg:text-2xl '>{dataNew.title}</h2>
			<p className='h-20'>{dataNew.content}</p>
		</div>
	);
};

export default NewsCard;