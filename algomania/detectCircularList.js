function solution(linkedList) {
    slow = linkedList.head()
    fast = linkedList.head()
    if (!slow) {
        return false
    }

    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            return true
        }
    }
    return false
}