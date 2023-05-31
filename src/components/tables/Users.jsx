const users = [
	{
		nombre: 'Jose Cardenas',
		correo: 'jose.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		nombre: 'Jose Cardenas',
		correo: 'jose.a.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		nombre: 'Jose Cardenas',
		correo: 'jose.e.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		nombre: 'Jose Cardenas',
		correo: 'jose.i.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
];

const Users = () => {
	return (
		<section className='w-full py-4 h-96 flex flex-col'>
			<h1 className='text-xl font-bold font-serif lg:text-2xl py-1'>
				Últimos usuarios registrados
			</h1>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto  w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3 font-medium'>Nombre</th>
							<th className='text-left p-3 font-medium'>Correo</th>
							<th className='text-left p-3 font-medium'>Activo</th>
							<th className='text-left p-3 font-medium'>Tipo de usuario</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr className='border-b hover:bg-gray-50' key={`row${user.correo}`}>
								<td className='p-3'>{user.nombre}</td>
								<td className='p-3'>{user.correo}</td>
								<td className='p-3'>{user.activo}</td>
								<td className='p-3'>{user.tipo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Users;
