import {useDispatch, useSelector} from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(fn: (state: RootState) => T) => useSelector(fn) 

// Why typed hooks? Raw useDispatch and useSelector don't know your store shape. Wrapping them once here gives you full autocomplete everywhere.
