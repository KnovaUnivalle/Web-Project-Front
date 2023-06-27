export const compareDataToUpdate = (newData, prevData) => {
	return Object.keys(newData).reduce((result, key) => {
		if (newData[key] !== prevData[key]) {
			result[key] = newData[key];
		}
		return result;
	}, {});
};

export const defineRol = (rol) => {
	return ['Administrador', 'Cliente', 'Gerente'][rol];
};
