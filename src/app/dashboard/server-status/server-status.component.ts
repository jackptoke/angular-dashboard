import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect((/*onCleanup*/) => {
      console.log(this.currentStatus());
      // onCleanup(() => {
      //   console.log("Cleaning up");
      // });
    });
  }

  private interval?: ReturnType<typeof setInterval>;
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random();
  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if(rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     }
  //     else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 3000);
  // }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if(rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      }
      else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  // ngOnDestroy(): void {
  //     clearTimeout(this.interval);
  //     console.log("Server Status is now destroyed");
  // }


}
