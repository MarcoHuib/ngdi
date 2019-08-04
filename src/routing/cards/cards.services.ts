import { IEditPanel } from '../../shared/editpanel/Interface/ieditpanelfacade';
import { Cards } from './cards.model';
import { Observable } from 'rxjs';

export class CardsService implements IEditPanel<Cards> {
    get(): Observable<Cards> {
        throw new Error("Method not implemented.");
    }
    add(value: Cards): void {
        throw new Error("Method not implemented.");
    }
}
