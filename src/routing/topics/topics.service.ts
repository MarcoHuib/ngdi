import { IEditPanel } from '../../shared/editpanel/Interface/ieditpanelfacade';
import { Topics} from './topics.model';
import { Observable } from 'rxjs';

export class Topicservice implements IEditPanel<Topics> {
    get(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    add(value: Topics): void {
        throw new Error("Method not implemented.");
    }

}
