import { Button } from '@mui/material';

const data = {
	name: 'Carne De Hamburguesa Catalan x 4 Unids',
	price: '16000',
	image:
		'https://cdn.shopify.com/s/files/1/0267/9200/1582/products/Carne-De-Hamburguesa-Catalan-x-4-Unids_600x.jpg?v=1610495160',
	url: 'https://lacesteria.co/products/carne-de-hamburguesa-catalan-x-4-unids?_pos=1&_sid=fda50a1fb&_ss=r',
	store: 'La Cestería',
};

const ProductCard = ({ dataProduct = data }) => {
	return (
		<div className='border-x border-t shadow-md p-2 my-auto flex'>
			<img
				className='w-2/5 my-auto md:w-1/2 block'
				src={dataProduct.image}
				alt='Imagen de producto'
				loading='lazy'
			/>
			<div className='my-auto'>
				<h2 className='text-xl font-semibold font-serif lg:text-3xl '>{dataProduct.name}</h2>
				<p>
					Precio:{' '}
					<strong>
						{Number(dataProduct.price).toLocaleString('es-CO', {
							style: 'currency',
							currency: 'COP',
						})}
					</strong>
				</p>
				<p>{`Vendedor: ${dataProduct.store}`}</p>
				<Button variant='contained' disableElevation>
					Ver más
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
