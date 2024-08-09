const string = 'abc';
const number = '1';
const bool = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그');
console.log(string, number, bool);
console.error('에러 메시지');

console.table([{name : "제로", birth : 1994}, {name : "hero", birth : 1998}]);
console.dir(obj, { colors : false, depth : 2 });
console.dir(obj, { colors : false, depth : 1 });

console.time('시간측정');
for (let i = 0; i < 10000; i++) {}
console.timeEnd('시간측정');

const b = () => {
    console.trace(`에러위치 추적`);
}

const a = () => {
    b();
}

a();

console.timeEnd(`전체 시간`);