import { StructDef } from './marshal';
export declare const PollFdDef: StructDef;
export interface PollFdIn {
    fd: number;
    events: number;
    revents: number;
}
export declare function pollfd_list(dst: DataView, count: number): [PollFdIn[], Error];
export declare function pollfd_unmarshal(dst: DataView, pollfd_list: PollFdIn[]): void;
