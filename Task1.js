var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++
    };
    
};
const counter = createCounter(10)
counter() 
counter()  