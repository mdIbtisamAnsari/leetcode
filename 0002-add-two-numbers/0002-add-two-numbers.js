/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l = new ListNode(0)
    let current = l
    let carry = 0
    while( l1 && l2 ){
        
        
        current.next = new ListNode(((l1.val + l2.val + carry)%10))
        current = current.next
        
        if( l1.val + l2.val + carry >= 10 ){
            carry = 1
        }else{
            carry = 0
        }
        l1 = l1.next
        l2 = l2.next
    }
    if(l1){
        while(l1){
            current.next = new ListNode(((l1.val + carry)%10))
            current = current.next
        
        if( l1.val + carry >= 10 ){
            carry = 1
        }else{
            carry = 0
        }
        l1 = l1.next
        }
    }
    if(l2){
        while(l2){
            current.next = new ListNode(((l2.val + carry)%10))
            current = current.next
        
        if( l2.val + carry >= 10 ){
            carry = 1
        }else{
            carry = 0
        }
        l2 = l2.next
        }
    }

    if(!l1 && !l2 && carry >0){
        current.next = new ListNode(carry)
    }


    return l.next
};