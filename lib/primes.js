(function() {

    // Cache of primes to ensure multiple calls are efficient
    var primenumbers=[2,3];

    // Returns true if this number is prime
    function test(number) {
        // Finds and stores another prime number
        function augment(number) {
            do {
                number+=2;
            } while (!test(number));
            primenumbers.push(number);
        }

        // Check that our number is not divisible by our primes, creating primes as we need them
        var limit=Math.floor(Math.sqrt(number));
        for (var i=0; primenumbers[i]<=limit; i++) {
            if (number % primenumbers[i] == 0) return false;
            if (i==primenumbers.length-1) augment(primenumbers[primenumbers.length-1]);
        }
        return true;
    }

    // Checks the validity of a number passed by the user
    function testInput(number) {
        return typeof number == 'number' && !isNaN(number) && number>=0 && number==parseInt(number);
    }

    var Primes={
        isPrime: function(number) {
            if (!testInput(number) || number<2) return false;
            return test(number);
        },
        nextPrime: function(number) {
            if (!testInput(number)) return 0;
            do {
                number+=(number%2==1 && number !=1 ? 2 : 1);
            } while (!test(number));
            return number;
        }
    };

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = Primes;
    } else if (typeof define === 'function' && define.amd) {
        define(['Primes'], Primes);
    } else if (typeof window !== 'undefined') {
        window.Primes = Primes;
    }
}());


