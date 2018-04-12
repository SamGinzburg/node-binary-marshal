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
