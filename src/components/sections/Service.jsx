import { Card, CardContent, CardMedia } from '@mui/material';
import food from '../../assets/food_service.svg';
import hygiene from '../../assets/hygiene_service.svg';
import cosmetic from '../../assets/cosmetic_service.svg';

const services = [
	{
		title: 'Productos Alimenticios',
		body: 'Desde carnes, verduras y frutas, hasta golosinas y bebidas',
		img: food,
	},
	{
		title: 'Productos Higiénicos',
		body: 'Puedes encontrar cepillos, jabones y más implementos',
		img: hygiene,
	},
	{
		title: 'Productos Cosméticos',
		body: 'Para que cuides tu imagen y tu bolsillo',
		img: cosmetic,
	},
];

const Service = () => {
	return (
		<section id='service' className='text-center pb-2'>
			<h2 className='text-3xl font-bold font-serif'>Nuestro Servicio</h2>
			<p>Hay diferentes categorías de productos que puedes encontrar:</p>
			<div className='flex justify-center flex-wrap py-4'>
				{services.map((service) => (
					<Card
						sx={{ maxWidth: '14rem', padding: '1rem', margin: '1rem' }}
						key={`service${service.title}`}
					>
						<CardMedia
							sx={{ maxWidth: '10rem', margin: 'auto' }}
							image={service.img}
							component='img'
							alt='Food bag'
						/>
						<CardContent>
							<h3 className='text-xl font-bold font-serif'>{service.title}</h3>
							<p>{service.body}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Service;
