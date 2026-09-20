// overload: baseado nos paramentos da funcao ela vai se comportar de maneiras diferentes
const adder = (x, y, ...args) => {
    if (args.length > 0)
        return args.reduce((s, v) => s + v, 0) + x + (y || 0);
    return x + (y || 0);
};
console.log(adder(1, 3, 8493938, 34994, 493793748934));
export {};
//# sourceMappingURL=overload.js.map