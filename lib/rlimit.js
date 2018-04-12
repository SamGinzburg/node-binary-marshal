"use strict";
exports.rlimit = {
    fields: [
        { name: 'padding1', type: 'uint32' },
        { name: 'rlim_cur', type: 'uint32' },
        { name: 'padding2', type: 'uint32' },
        { name: 'rlim_max', type: 'uint32' },
    ],
    alignment: 'natural',
    length: 128,
};
;
function rlimit_struct_marshal(dst, value) {
    dst.setInt32(0, value);
    dst.setInt32(31, 0);
    dst.setInt32(63, value);
    dst.setInt32(95, 0);
}
exports.rlimit_struct_marshal = rlimit_struct_marshal;
