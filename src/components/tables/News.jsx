import { Button } from '@mui/material';

const defaultFunc = (values) => console.log(values);

const News = ({ dataNews = [], navigateNew = defaultFunc }) => {
	return (
		<section className='w-full pb-3 flex flex-col h-140 lg:h-128'>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Título</th>
							<th className='text-left p-3'>Estado</th>
							<th className='text-left p-3'>Recurso</th>
							<th className='text-left p-3'>Fecha De Publicación</th>
							<th className='text-left p-3'>Ver Noticia</th>
						</tr>
					</thead>
					<tbody>
						{dataNews.map((dataNew) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataNew.id}`}>
								<td className='p-3'>{dataNew.title}</td>
								<td className='p-3'>{dataNew.is_active ? 'Publicada' : 'No Publicada'}</td>
								<td className='p-3'>
									<a href={dataNew.image} target='_blanck'>
										{dataNew.image}
									</a>
								</td>
								<td className='p-3'>{dataNew.date}</td>
								<td className='p-3'>
									<Button color='secondary' onClick={() => navigateNew(dataNew.id)}>
										Noticia
									</Button>
								</td>
							</tr>
						))}
						{dataNews.map((dataNew) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataNew.id}`}>
								<td className='p-3'>{dataNew.title}</td>
								<td className='p-3'>{dataNew.is_active ? 'Publicada' : 'No Publicada'}</td>
								<td className='p-3'>
									<a href={dataNew.image} target='_blanck'>
										{dataNew.image}
									</a>
								</td>
								<td className='p-3'>{dataNew.date}</td>
								<td className='p-3'>
									<Button color='secondary' onClick={() => navigateNew(dataNew.id)}>
										Noticia
									</Button>
								</td>
							</tr>
						))}
						{dataNews.map((dataNew) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataNew.id}`}>
								<td className='p-3'>{dataNew.title}</td>
								<td className='p-3'>{dataNew.is_active ? 'Publicada' : 'No Publicada'}</td>
								<td className='p-3'>
									<a href={dataNew.image} target='_blanck'>
										{dataNew.image}
									</a>
								</td>
								<td className='p-3'>{dataNew.date}</td>
								<td className='p-3'>
									<Button color='secondary' onClick={() => navigateNew(dataNew.id)}>
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