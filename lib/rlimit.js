"use strict";
exports.rlimit = {
    fields: [
        { name: 'rlim_cur', type: 'uint64' },
        { name: 'rlim_max', type: 'uint64' },
    ],
    alignment: 'natural',
    length: 128,
};
;
