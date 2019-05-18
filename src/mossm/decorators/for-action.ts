export function forAction(action: any) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = true;
        descriptor.value.forAction = action;
    };
}
