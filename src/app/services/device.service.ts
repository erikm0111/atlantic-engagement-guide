import { Injectable } from '@angular/core';

export enum DeviceType {
  Web = 'Web',
  Mobile = 'Mobile'
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  public getDeviceType(): DeviceType {
    return window.matchMedia('only screen and (max-width: 1200px)').matches ? DeviceType.Mobile : DeviceType.Web;
  }
}
