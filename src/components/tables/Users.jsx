import { Button } from '@mui/material';
import { defineRol } from '../../utils/AUX';

const defaultFunc = (values) => console.log(values);

const Users = ({ dataUsers = [], navigateUser = defaultFunc, navigateEdit }) => {
	return (
		<section className='w-full pb-3 flex flex-col h-140 lg:h-128'>
			<div className='overflowx-x-auto overflow-y-auto border-x border-t shadow-md w-full'>
				<table className='table-auto w-full'>
					<thead className='border-b'>
						<tr className='bg-gray-100'>
							<th className='text-left p-3'>Rol</th>
							<th className='text-left p-3'>Correo</th>
							<th className='text-left p-3'>Estado</th>
							{navigateEdit ? <th className='text-left p-3'>Editar Usuario</th> : null}
							<th className='text-left p-3'>Ver Usuario</th>
						</tr>
					</thead>
					<tbody>
						{dataUsers.map((dataUser) => (
							<tr className='border-b hover:bg-gray-50' key={`row${dataUser.id}`}>
								<td className='p-3'>{defineRol(dataUser.rol)}</td>
								<td className='p-3'>{dataUser.email}</td>
								<td className='p-3'>{dataUser.is_active ? 'Activo' : 'Inactivo'}</td>
								{navigateEdit ? (
									<td className='p-3'>
										<Button color='secondary' onClick={() => navigateEdit(dataUser.id)}>
											Noticia
										</Button>
									</td>
								) : null}

								<td className='p-3'>
									<Button color='primary' onClick={() => navigateUser(dataUser.id)}>
										Usuario
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
 
export default Users;