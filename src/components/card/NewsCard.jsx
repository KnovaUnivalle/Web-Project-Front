const NewsCard = ({ dataNew }) => {
	return (
		<div className='border-x border-t shadow-md p-2 my-auto md:w-80'>
			<img
				className='w-full mx-auto md:w-80 block'
				src={dataNew.image}
				alt='Imagen de noticia'
				loading='lazy'
			/>
			<h2 className='text-xl font-semibold font-serif lg:text-3xl '>{dataNew.title}</h2>
			<p className='text-sm'>{`Publicado: ${dataNew.date}`}</p>
			<p>{dataNew.content}</p>
		</div>
	);
};

export default NewsCard;
