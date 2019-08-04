import { IEditPanel } from '../../shared/editpanel/Interface/ieditpanelfacade';
import { Cards } from './cards.model';
import { Observable, BehaviorSubject } from 'rxjs';

export class CardsService implements IEditPanel<Cards> {
    private cardsStore = new BehaviorSubject<Cards[]>([
    ]);


    get(): Observable<Cards[]> {
        return this.cardsStore;
    }

    add(value: Cards): void {
        const cards = this.cardsStore.getValue();
        cards.push(value);
        this.cardsStore.next([...cards]);
    }
}
