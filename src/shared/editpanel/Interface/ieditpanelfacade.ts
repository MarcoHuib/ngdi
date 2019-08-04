import { Observable } from 'rxjs';

export interface IEditPanel<T> {
    get(): Observable<T>;
    add(value: T): void;
}
