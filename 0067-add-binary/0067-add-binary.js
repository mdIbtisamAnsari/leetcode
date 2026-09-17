/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a =[...a.split('').reverse().map(Number)]
    b = [...b.split('').reverse().map(Number)]
    let s = []
    let pos = 0
    let carry = 0
    for(pos ; pos<a.length || pos<b.length;pos++){
        let av = a[pos] ?? 0
        let bv = b[pos] ?? 0
        switch (av + bv + carry){
            case 0 :
                s.push(0)
                break
            case 1 :
                s.push(1)
                carry = 0
                break
            case 2 :
                s.push(0)
                carry = 1
                break
            default :
                s.push(1)
                break
        }

    }
    if(carry) s.push(1)
    return s.reverse().join('')
};