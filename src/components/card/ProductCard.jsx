import { Button } from '@mui/material';

const ProductCard = ({ dataProduct = [] }) => {
	return (
		<div className='border-x border-t shadow-md p-2 my-auto flex w-full h-full'>
			<img
				className='w-2/5 my-auto md:w-1/2 block'
				src={dataProduct.image}
				alt='Imagen de producto'
				loading='lazy'
			/>
			<div className='my-auto h-full flex flex-col justify-between'>
				<div>
					<h2 className='text-xl font-semibold font-serif lg:text-3xl '>{dataProduct.name}</h2>
					<p>
						Precio:
						<strong>
							{Number(dataProduct.price).toLocaleString('es-CO', {
								style: 'currency',
								currency: 'COP',
							})}
						</strong>
					</p>
					<p>{`Vendedor: ${dataProduct.store}`}</p>
				</div>
				<Button variant='contained' disableElevation>
					Ver más
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
