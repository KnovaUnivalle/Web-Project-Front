import { object, string } from 'yup';

export const searchSchema = object().shape({ search: string().max(50, 'Máximo 50 caracteres') });
