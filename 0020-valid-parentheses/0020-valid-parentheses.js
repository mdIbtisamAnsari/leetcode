/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a = []
    for(i of [...s]){
        switch(i){
            case '(' : a.push(')');
                break ;
            case '[' : a.push(']');
                break ;
            case '{' : a.push('}');
                break ;
            default : 
                if (i!==a.pop()){
                    return false
                }
        }
    }
    return a.length == 0
};