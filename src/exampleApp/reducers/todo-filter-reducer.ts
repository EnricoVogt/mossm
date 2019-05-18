import { forAction } from '../../mossm/decorators/for-action';
import { IAction } from '../../mossm/interfaces/action';
import { Reducer } from '../../mossm/reducer';

export class TodoFilterReducer extends Reducer {
    @forAction('setFilter')
    public setFilter(state: any, action: IAction) {
        return action.payload;
    }
}
