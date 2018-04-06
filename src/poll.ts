import { StructDef, Marshal, Unmarshal, isZero } from './marshal';

export const PollFdDef: StructDef = {
	fields: [
		{name: 'fd',    type: 'uint32'},
		{name: 'events',    type: 'int16'},
		{name: 'revents', type: 'uint16'},
	],
	alignment: 'natural', // 'packed'
};

export interface PollFdIn {
	fd: number;
	events:   number;
	revents:   number;
};

export function pollfd_list(dst: DataView, count: number): [PollFdIn[], Error] {
    let ret: PollFdIn[] = [];
    for (let c = 0; c < count; c++) {
        let temp: PollFdIn = {
            fd: dst.getInt32(c * PollFdDef.length),
            events: dst.getInt16(c * PollFdDef.length + 32),
            revents: dst.getInt16(c * PollFdDef.length + 48),
        };
        ret.push(temp);
    }
    return [ret, null]
}

export function pollfd_unmarshal(dst: DataView, pollfd_list: PollFdIn[]): void {
    for (let c = 0; c < pollfd_list.length; c++) {
        dst.setInt32(c * PollFdDef.length, pollfd_list[c].fd);
        dst.setInt16(c * PollFdDef.length + 32, pollfd_list[c].events);
        dst.setInt16(c * PollFdDef.length + 48, pollfd_list[c].revents);
    }
}


