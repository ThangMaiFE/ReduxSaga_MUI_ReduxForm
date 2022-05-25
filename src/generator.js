console.log('Học Generator Funtion');

function* helloGenerator() {
    yield 2022;
}
function* helloGeneratorFunction() {
    yield 2021;
    yield* helloGenerator();
    return 'Tự Học Lập Trình Redux-Sage';
}

const result = helloGeneratorFunction();
console.log('value 1: ', result.next());
console.log('value 2: ', result.next());
console.log('value 3: ', result.next());
