import ProductCard from '../card/ProductCard';

const Recomendations = () => {
	return (
		<article className='md:w-1/2 overflowx-x-auto overflow-y-auto md:h-140'>
			<h1 className='text-center text-3xl font-semibold pb-3'>Recomendaciones</h1>
			<div className='flex flex-col gap-4'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</article>
	);
};

export default Recomendations;
