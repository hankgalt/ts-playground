class ListNode<NodeData = any> {
  value: NodeData | null
  next: ListNode<NodeData> | null

  constructor (value: NodeData | null) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList<NodeData> {
  head: ListNode<NodeData> | null
  size: number

  constructor () {
    this.head = null
    this.size = 0
  }

  addLast (value: NodeData): boolean {
    const newNode = new ListNode<NodeData>(value)
    if (this.head == null) {
      this.head = newNode
      this.size = 1
      return true
    }

    // if there are already nodes present
    let current = this.head
    while (current.next != null) {
      current = current.next
    }
    current.next = newNode
    this.size++
    return true
  }

  removeLast (): boolean {
    if (this.head == null) {
      return false
    }

    if (this.size === 1) {
      this.head = null
      this.size = 0
      return true
    }

    let curr = this.head
    let prevNode = null

    while (curr.next != null) {
      prevNode = curr
      curr = curr.next
    }

    if (prevNode != null) {
      prevNode.next = null
    }
    this.size--
    return true
  }

  removeFirst (): boolean {
    if (this.head == null) {
      return false
    }

    if (this.size === 1) {
      this.head = null
      this.size = 0
      return true
    }

    const prevHead = this.head
    this.head = prevHead.next

    prevHead.next = null
    this.size--
    return true
  }

  addFirst (value: NodeData): boolean {
    const newNode = new ListNode<NodeData>(value)
    if (this.head == null) {
      this.head = newNode
      this.size = 1
      return true
    }

    const prevHead = this.head
    newNode.next = prevHead
    this.head = newNode
    this.size++
    return true
  }

  getAtIndex (n: number): ListNode<NodeData> | null {
    if (this.head == null || n > this.size) {
      return null
    }

    if (n === 0) {
      return this.head
    }

    let counter = 1
    let current: ListNode<NodeData> | null = this.head
    while (counter <= n) {
      if (current != null) {
        current = current.next
        counter++
      }
    }

    return current
  }

  removeNthFromEnd (n: number): ListNode<NodeData> | null {
    if (this.head == null || n > this.size) {
      return null
    }
    let dummy = new ListNode<NodeData>(null)
    let first: ListNode<NodeData> | null = this.head
    let second = this.head
    for (let i = 0; i <= n; i++) {
      if (first.next != null) first = first.next
    }

    while (first != null) {
      first = first.next
      dummy = second
      if (second.next != null) second = second.next
    }
    if (dummy.next != null) dummy.next = dummy.next.next
    return second
  }

  reverseList (): ListNode<NodeData> | null {
    let prev: ListNode<NodeData> | null = null
    let curr = this.head
    while (curr != null) {
      const temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
    }
    return prev
  }
}
