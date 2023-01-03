import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../data';

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;