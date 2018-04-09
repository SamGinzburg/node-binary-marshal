"use strict";
exports.rlimit = {
    fields: [
        { name: 'rlim_cur', type: 'uint32' },
        { name: 'rlim_max', type: 'uint32' },
    ],
    alignment: 'natural',
    length: 64,
};
;
