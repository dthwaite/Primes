var assert = require('assert');
var Primes=require('../');

describe('Primes.js',function() {
    it('Check bad inputs',function() {
        assert.equal(Primes.isPrime(),false,'No parameter');
        assert.equal(Primes.isPrime(NaN),false,'Not a Number (NaN)');
        assert.equal(Primes.isPrime([]),false,'Array');
        assert.equal(Primes.isPrime('123'),false,'String');
        assert.equal(Primes.isPrime({}),false,'Object');
    });

    it('Check primality of numbers 0 - 9',function() {
        for (var i=0; i<10; i++) {
            assert.equal(Primes.isPrime(i),[false,false,true,true,false,true,false,true,false,false][i],'is '+i+' prime?');
        }
    });

    it('Check primality of other numbers',function() {
        assert.equal(Primes.isPrime(27),false,'is 27 prime?');
        assert.equal(Primes.isPrime(31),true,'is 31 prime?');
        assert.equal(Primes.isPrime(511),false,'is 511 prime?');
        assert.equal(Primes.isPrime(123454123),false,'is 123454123 prime?');
    });

    it('Check search for following primes',function() {
        assert.equal(Primes.nextPrime(1),2,'2 follows 1');
        assert.equal(Primes.nextPrime(2),3,'3 follows 2');
        assert.equal(Primes.nextPrime(27),29,'29 follows 27');
        assert.equal(Primes.nextPrime(31),37,'37 follows 31');
        assert.equal(Primes.nextPrime(511),521,'521 follows 511');
        assert.equal(Primes.nextPrime(123454123),123454141,'123454141 follows 123454123');
        assert.equal(Primes.nextPrime(123454141),123454147,'123454147 follows 123454141');
        assert.equal(Primes.nextPrime(511),521,'521 follows 511');
    });
});
