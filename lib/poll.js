"use strict";
exports.PollFdDef = {
    fields: [
        { name: 'fd', type: 'uint32' },
        { name: 'events', type: 'int16' },
        { name: 'revents', type: 'uint16' },
    ],
    alignment: 'natural',
    length: 64,
};
;
function pollfd_list(dst, count) {
    var ret = [];
    for (var c = 0; c < count; c++) {
        var temp = {
            fd: dst.getInt32(c * exports.PollFdDef.length),
            events: dst.getInt16(c * exports.PollFdDef.length + 32),
            revents: dst.getInt16(c * exports.PollFdDef.length + 48),
        };
        ret.push(temp);
    }
    return [ret, null];
}
exports.pollfd_list = pollfd_list;
function pollfd_unmarshal(dst, pollfd_list) {
    for (var c = 0; c < pollfd_list.length; c++) {
        dst.setInt32(c * exports.PollFdDef.length, pollfd_list[c].fd);
        dst.setInt16(c * exports.PollFdDef.length + 32, pollfd_list[c].events);
        dst.setInt16(c * exports.PollFdDef.length + 48, pollfd_list[c].revents);
    }
}
exports.pollfd_unmarshal = pollfd_unmarshal;
