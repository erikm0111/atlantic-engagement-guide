import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {DeviceService, DeviceType} from './device.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private readonly showQuoteSubject: Subject<boolean>;

  constructor(private deviceService: DeviceService) {
    this.showQuoteSubject = new BehaviorSubject(deviceService.getDeviceType() === DeviceType.Web);
  }

  public getShowQuoteObservable(): Observable<boolean> {
    return this.showQuoteSubject;
  }

  public setQuoteShown(): void {
    this.showQuoteSubject.next(false);
  }
}
