import { from, fromEvent, interval } from 'rxjs';
import { 
  map,
  filter,
  scan,
  reduce,
  startWith,
  take,
  first,
  last,
  skip,
  takeUntil,
  throttleTime,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

console.clear();
const l = console.log;

// 5. Operators

const source$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5.1 Simple operators
// source$
//   .pipe(
//     // map(val => val * val),
//     // filter(val => val > 10),
//     // startWith(100),
//     // scan((acc, curr) => acc + curr),
//     // reduce((acc, curr) => acc + curr, 0)
//   )
//   .subscribe(val => l(val))

// 5.2 

// source$
//   .pipe(
//       // first(),
//       // first(val => val > 5)
//       // last(),
//       // skip(3)
//       // take(4),
//     )
//     .subscribe(val => l(val))

// 5.3 Transforming Dom Events

// const input = document.querySelector('input')

// fromEvent(input, 'input')
//   .pipe(
//     map((event: any) => event.target.value),
//     filter(val => val !== '')
//   )
//   .subscribe(val => l(val))


// 5.4 Stopping streams

// const button = document.querySelector('button')
// const buttonClick$ = fromEvent(button, 'click')


// interval(1000)
//   .pipe(
//     // takeUntil(buttonClick$)
//   )
//   .subscribe(val => l(val))

// 5.5 Throttle and debounce

// const scroll$ = fromEvent(window, 'scroll')
//   .pipe(
//     map((ev: any) => window.pageYOffset),
//     // throttleTime(500),
//     // debounceTime(500)
//   )
//   .subscribe(l)


const input = document.querySelector('input')

fromEvent(input, 'input')
  .pipe(
    map((event: any) => event.target.value),
    // debounceTime(500),
    // distinctUntilChanged()
  )
  .subscribe(val => l(`Make server call for: ${val}`))