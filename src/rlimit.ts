import { StructDef, Marshal, Unmarshal, isZero } from './marshal';

export const rlimit: StructDef = {
	fields: [
		{name: 'padding1',    type: 'uint32'},
		{name: 'rlim_cur',    type: 'uint32'},
		{name: 'padding2',    type: 'uint32'},
		{name: 'rlim_max',    type: 'uint32'},
	],
	alignment: 'natural', // 'packed'
	length: 128,
};

export interface RlimitIn {
	padding1:   number;
	rlim_cur:   number;
	rlim_max:   number;
	padding2:   number;
};