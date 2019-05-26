export function createAction(type: string) {
    return (payload: any = null) => {
        return payload ? { type, payload } : { type };
    };
}
