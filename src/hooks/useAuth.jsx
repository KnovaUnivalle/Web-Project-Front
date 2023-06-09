import { createContext, useMemo, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useLocalStorage('token_detective', null);
	const [rol, setRol] = useLocalStorage('rol_id_detective', null);
	/**
	 * delete token save in local storage
	 */
	const logout = (nav) => {
		setToken(null);
		setRol(null);
		nav();
	};

	/**
	 *	save token in local storage
	 * @param {string} key
	 */
	const login = (key, rol, nav) => {
		setToken(key);
		setRol(rol);
		nav();
	};

	const value = useMemo(() => ({ token, rol, login, logout }), [token]);
	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
