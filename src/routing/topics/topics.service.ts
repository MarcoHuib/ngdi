import { IEditPanel } from '../../shared/editpanel/Interface/ieditpanelfacade';
import { Topics} from './topics.model';
import { Observable, BehaviorSubject } from 'rxjs';

export class Topicservice implements IEditPanel<Topics> {
    private topicStore = new BehaviorSubject<Topics[]>([
    ]);


    get(): BehaviorSubject<Topics[]> {
        return this.topicStore;
    }

    add(value: Topics): void {
        const topics = [...this.topicStore.getValue(), value];
        this.topicStore.next(topics);
    }

}
