import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;
  private customIntervalSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // const customIntervalObservable = Observable.create((observer) => {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      let interval = setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);

      // When the consumer unsubscribes, clean up data ready for next subscription
      // return {
      //   unsubscribe() {
      //     clearInterval(interval);
      //   },
      // };
    });
    this.customIntervalSubscription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    // this.intervalSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }
}
