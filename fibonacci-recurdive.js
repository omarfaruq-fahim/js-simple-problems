function fibonacciSeries(n){
    if (n == 0) {
        return  [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fiboSeries = fibonacciSeries(6);
console.log(fiboSeries);