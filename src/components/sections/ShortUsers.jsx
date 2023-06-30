import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { USERS_ADMIN_PATH } from '../../utils/PATH';
import { defineRol } from '../../utils/AUXILIAR';

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
							<tr className='border-b hover:bg-gray-50' key={`row${dataUser.id}`}>
								<td className='p-3'>{defineRol(dataUser.rol)}</td>
								<td className='p-3'>{dataUser.email}</td>
								<td className='p-3'>{dataUser.is_active ? 'Activo' : 'Inactivo'}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ShortUsers;
