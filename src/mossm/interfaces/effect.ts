export interface IEffect {
    forAction: string;
    (actionStream: any): any;
}
