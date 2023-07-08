import { Injectable } from '@angular/core';
declare var db: any;

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public storageName = 'employee_list_db';
  constructor() {}

  submit(keyname: any, value: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .put(value, keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('Error');
            resolve(false);
          }
        };
      }
    });
  }

  delete(keyname: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .delete(keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('Error');
            resolve(false);
          }
        };
      }
    });
  }
}
