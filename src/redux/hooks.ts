import { useDispatch, useSelector } from 'react-redux';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from '@reduxjs/toolkit';

// ThunkDispatch with 'any' for State and ExtraThunkArg
type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
