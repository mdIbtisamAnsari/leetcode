/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let d = new ListNode(0,head)
    let a= d
    let b = d
    for( let i = 0 ; i<n ; i++ ){
        a= a.next
    }
    while(a.next){
        a=a.next
        b=b.next
    }
    b.next = b.next.next
    return d.next
};