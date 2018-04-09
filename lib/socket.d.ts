import { StructDef } from './marshal';
export declare function IPv4BytesToStr(src: DataView, off: number): [any, number, Error];
export declare function IPv4StrToBytes(dst: DataView, off: number, src: string): [number, Error];
export declare function htons(dst: DataView, off: number, src: number): [number, Error];
export declare function ntohs(src: DataView, off: number): [any, number, Error];
export interface SockAddrIn {
    family: number;
    port: number;
    addr: string;
}
export declare const SockAddrInDef: StructDef;
