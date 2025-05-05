// const EventEmitter = require('events');

// class Emitter extends EventEmitter {}

// const myE = new Emitter();

// myE.on('foo', () => {
//     console.log('An event occurred!'); 
// })

// myE.on('foo', (x) => {
//     console.log('An event occurred!', x); 
// })

// myE.on('event', () => {
//     console.log('An event occurred2!'); 
// })

// myE.emit('foo');
// myE.emit('foo', 'done');
// myE.emit('event')


console.log('A');

setTimeout(() => {
    for(let i=0; i<1; i++){};
    console.log('C');
    
}, 1)

function add(a, b){
    return a + b;
}

function main(a, b, callback){
    let c = callback(a, b);
    console.log(c);
}

main(1, 2, add);
