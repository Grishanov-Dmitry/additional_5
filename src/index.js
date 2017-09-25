    module.exports = function check(str, bracketsConfig) {
        // your solution
        const pairs = bracketsConfig.reduce((acc, [opening, closing]) => Object.assign(acc, { [opening]: closing }), {});
        const stack = [];

        for(let bracket of str.split('')) {
            if(bracket === pairs[bracket] && stack[stack.length - 1] === bracket) {
                stack.pop();
            } else if(pairs[bracket]){
                stack.push(bracket);
            } else if(bracket !== pairs[stack.pop()]) {
                return false;
            }
        }

        return !stack.length;
    };

