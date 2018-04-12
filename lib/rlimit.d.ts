import { StructDef } from './marshal';
export declare const rlimit: StructDef;
export interface RlimitIn {
    padding1: number;
    rlim_cur: number;
    rlim_max: number;
    padding2: number;
}
export declare function rlimit_struct_marshal(dst: DataView, value: number): void;
