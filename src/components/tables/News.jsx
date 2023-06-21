import { Button } from '@mui/material';

const defaultUsers = [
	{
		titulo: 'Nuevo Shampoo',
		correo: 'https://pokeapi.co/api/v2/pokemon/pikachu',
		cuerpo: '20-06-2023',
	},
	{
		titulo: 'Descuentos especiales',
		correo: 'https://pokeapi.co/api/v2/pokemon/pikachu1',
		cuerpo: '20-06-2023',
	},
	{
		titulo: 'Nuevos impuestos',
		correo: 'https://pokeapi.co/api/v2/pokemon/pikachu2',
		cuerpo: '20-06-2023',
	},
	{
		titulo: 'Ofertas de empleo',
		correo: 'https://pokeapi.co/api/v2/pokemon/pikachu3',
		cuerpo: '20-06-2023',
	},
];

const News = ({ dataNews = defaultUsers }) => {
	return (
		<section className='w-full py-3 flex flex-col h-152 lg:h-140'>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Título</th>
							<th className='text-left p-3'>Recurso</th>
							<th className='text-left p-3'>Fecha De Publicación</th>
							<th className='text-left p-3'>Ver Noticia</th>
						</tr>
					</thead>
					<tbody>
						{dataNews.map((dataNew) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataNew.correo}`}>
								<td className='p-3'>{dataNew.titulo}</td>
								<td className='p-3'>
									<a href={dataNew.correo} target='_blank' rel='noreferrer'>
										{dataNew.correo}
									</a>
								</td>
								<td className='p-3'>{dataNew.cuerpo}</td>
								<td className='p-3'>
									<Button color='secondary' onClick={() => console.log('here')}>
										Noticia
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default News;