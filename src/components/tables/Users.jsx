import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { USERS_ADMIN_PATH } from '../../utils/PATH';

const defaultUsers = [
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

const Users = ({ users = defaultUsers }) => {
	const navigate = useNavigate();

	return (
		<section className='w-full py-3 h-96 flex flex-col lg:h-80'>
			<div className=' flex justify-between py-2'>
				<h1 className='text-xl font-bold font-serif lg:text-2xl'>Últimos usuarios registrados</h1>
				<Button
					variant='contained'
					sx={{ height: '1.7rem', marginTop: 'auto', marginBottom: 'auto' }}
					onClick={() => navigate(USERS_ADMIN_PATH)}
				>
					Más
				</Button>
			</div>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto  w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Nombre</th>
							<th className='text-left p-3'>Correo</th>
							<th className='text-left p-3'>Activo</th>
							<th className='text-left p-3'>Tipo de usuario</th>
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