const defaultUsers = [
	{
		titulo: 'Jose Cardenas',
		correo: 'jose.cardenas@correounivalle.edu.co',
		cuerpo: 'Sí',
		tipo: 'Gerente',
	},
	{
		titulo: 'Jose Cardenas',
		correo: 'jose.a.cardenas@correounivalle.edu.co',
		cuerpo: 'Sí',
		tipo: 'Gerente',
	},
	{
		titulo: 'Jose Cardenas',
		correo: 'jose.e.cardenas@correounivalle.edu.co',
		cuerpo: 'Sí',
		tipo: 'Gerente',
	},
	{
		titulo: 'Jose Cardenas',
		correo: 'jose.i.cardenas@correounivalle.edu.co',
		cuerpo: 'Sí',
		tipo: 'Gerente',
	},
];

const News = ({ dataNews = defaultUsers }) => {
	return (
		<section className='w-full py-3 h-96 flex flex-col lg:h-80'>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto  w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Título</th>
							<th className='text-left p-3'>Correo</th>
							<th className='text-left p-3'>Cuerpo</th>
							<th className='text-left p-3'>Tipo de usuario</th>
						</tr>
					</thead>
					<tbody>
						{dataNews.map((dataNew) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataNew.correo}`}>
								<td className='p-3'>{dataNew.titulo}</td>
								<td className='p-3'>{dataNew.correo}</td>
								<td className='p-3'>{dataNew.cuerpo}</td>
								<td className='p-3'>{dataNew.tipo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default News;