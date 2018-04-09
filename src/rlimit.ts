import { StructDef, Marshal, Unmarshal, isZero } from './marshal';

export const rlimit: StructDef = {
	fields: [
		{name: 'rlim_cur',    type: 'uint32'},
		{name: 'rlim_max',    type: 'uint32'},
	],
	alignment: 'natural', // 'packed'
	length: 64,
};

export interface RlimitIn {
	rlim_cur:   number;
	rlim_max:   number;
};