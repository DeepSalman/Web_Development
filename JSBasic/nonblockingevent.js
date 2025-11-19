//In js non-blocking events are part of its asynchronous behavior 
//Normally, if you do a long task (like reading a huge file or waiting 5 seconds), JS would block everything else.
//Non-blocking lets JS start the task and move on without waiting.
//When the task finishes, JS comes back to handle it.
//This is done via the event loop, callbacks, Promises, and async/await.


console.log("Start");

//Callback function
setTimeout(() => {
    console.log("This comes later! ");
},100)

console.log("END");



///Promise
console.log("Promise : ");

const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Waited for ${ms}ms`);
        }, ms);
    });
};

wait(2000).then(message => {
    console.log(message);
});

console.log("This runs immediately!");

