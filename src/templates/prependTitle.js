module.exports = function (title) {
    var out = '[' + title + this.type + ']\n';

    for (var i in this) {
        if (this[i] === null || this[i] === undefined || i === 'type') {
            continue;
        }

        out += i + ' = ' + this[i] + '\n';
    }

    if (out.match(/\n/g).length === 1) {
        return '';
    }

    return out;
}
