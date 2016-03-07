## primes.js

primes.js is a very, very simple prime number checker and generator

It caches prime numbers so that repeated calls rely on previous work done in finding primes to improve performance

* Install:
npm install

* Test:
npm test

Usage:

in node:
```javascript
    var Primes = require('primes');

    Primes.isPrime(31); // true
    Primes.nextPrime(31); // 37
```

in the browser:
```javascript
    <script src ="primes.js"></script>

    Primes.isPrime(31); // true
    Primes.nextPrime(31); // 37
```

### API
Supported methods: `isPrime`, `nextPrime`

###### isPrime
```javascript
	if (Primes.isPrime(31)) console.log("31 is a prime number");
```

###### nextPrime
```javascript
	console.log(Primes.nextPrime(32)+" is the next prime after 32");
```