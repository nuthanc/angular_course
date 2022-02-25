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
        // if (count === 2) {
        //   observer.complete();
        // }
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          // observer.error('Count greater than 3');
          observer.error(new Error('Count greater than 3'));
        }
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
    }, (error) => {
      console.log('I am the error: '+ error);
      alert(error.message);
    }, () => {
      console.log('Completed!')
    })
  }

  ngOnDestroy(): void {
    // this.intervalSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }
}
