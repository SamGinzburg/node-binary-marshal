import { StructDef, Marshal, Unmarshal, isZero } from './marshal';

export const rlimit: StructDef = {
	fields: [
		{name: 'rlim_cur',    type: 'uint64'},
		{name: 'rlim_max',    type: 'uint64'},
	],
	alignment: 'natural', // 'packed'
	length: 128,
};

export interface RlimitIn {
	rlim_cur:   number;
	rlim_max:   number;
};