import ProductCard from '../card/ProductCard';

const Recomendations = ({ dataProducts = [] }) => {
	return (
		<article className='md:w-1/2 overflowx-x-auto overflow-y-auto md:h-140'>
			<h1 className='text-center text-3xl font-semibold pb-3'>Recomendaciones</h1>
			<div className='flex flex-col gap-4'>
				{dataProducts.map((dataProduct, index) => (
					<div className='md:w-5/12' key={`product${index}`}>
						<ProductCard dataProduct={dataProduct} />
					</div>
				))}
			</div>
		</article>
	);
};

export default Recomendations;
