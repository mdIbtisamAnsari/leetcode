/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let d = new ListNode(0,head).next
    function some(a,b){
       [a.val , b.val  ] = [b.val, a.val ] 
        

    }
    let p = d
    while (p?.next ) {
        some(p,p.next) 
        p = p.next?.next
        }
    return d
};