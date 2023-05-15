import { Button } from '@mui/material';

const Welcome = () => {
	return (
		<>
			<section
				id='welcome'
				className='text-center py-24 lg:text-left sm:pb-72 lg:pb-64 sm:flex-wrap sm:justify-between sm:flex sm:flex-row '
			>
				<div className='p-7 lg:w-2/3 lg:pl-14'>
					<h2 className='text-6xl font-bold font-serif lg:text-7xl'>
						Bienvenida(o)
						<br />
						a
						<br />
						Detective
					</h2>
					<p className='p-2 lg:p-0 lg:pr-44 lg:text-xl'>
						Existen muchos productos para consumir, que se venden por diferentes almacenes, pero
						cómo encontrar el <b>Mejor Precio.</b> Hoy existe <b>Detective </b>
						conocelo:
					</p>
					<Button
						disableElevation
						style={{ background: '#6EB500', marginTop: '1rem' }}
						variant='contained'
					>
						Comienza Ya!
					</Button>
				</div>
				<img src='./src/assets/food.svg' alt='Food bag' className='w-36 m-auto py-10 sm:w-56' />
			</section>
		</>
	);
};

export default Welcome;
