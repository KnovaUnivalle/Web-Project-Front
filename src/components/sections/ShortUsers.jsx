import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { USERS_ADMIN_PATH } from '../../utils/PATH';

const defaultUsers = [
	{
		correo: 'jose.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		correo: 'jose.a.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		correo: 'jose.e.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
	{
		correo: 'jose.i.cardenas@correounivalle.edu.co',
		activo: 'Sí',
		tipo: 'Gerente',
	},
];

const ShortUsers = ({ dataUsers = defaultUsers }) => {
	const navigate = useNavigate();

	return (
		<section className='w-full py-3 h-96 flex flex-col lg:h-80'>
			<div className=' flex justify-between py-1'>
				<h2 className='text-xl font-bold font-serif lg:text-2xl'>Últimos usuarios registrados</h2>
				<Button onClick={() => navigate(USERS_ADMIN_PATH)}>
					<p className='text-lg font-semibold '>Más</p>
				</Button>
			</div>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Correo</th>
							<th className='text-left p-3'>Rol</th>
							<th className='text-left p-3'>Estado</th>
						</tr>
					</thead>
					<tbody>
						{dataUsers.map((dataUser) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataUser.correo}`}>
								<td className='p-3'>{dataUser.correo}</td>
								<td className='p-3'>{dataUser.activo}</td>
								<td className='p-3'>{dataUser.tipo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ShortUsers;
