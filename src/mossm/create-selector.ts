export function createSelector(fn: any, ...selectors: any[]) {
    return (state: any) => {
        const selectorsFn = selectors.map((x) => x(state));
        return fn(...selectorsFn);
    };
}
