import { main } from './main';

export function helper() {
    console.log('Helper called');

    // call back main function
    main();

    // then call main function again
    main();

    // then call main function again
    main();

    // then call main function again
    main();
  }