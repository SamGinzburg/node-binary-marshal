import { StructDef } from './marshal';
export declare const rlimit: StructDef;
export interface RlimitIn {
    rlim_cur: number;
    rlim_max: number;
}
