class DoublyLinkedListNode<NodeData = any> {
  value: NodeData
  next: DoublyLinkedListNode<NodeData> | null
  previous: DoublyLinkedListNode<NodeData> | null

  constructor (value: NodeData) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

export class DoublyLinkedList<NodeData> {
  private head: DoublyLinkedListNode<NodeData> | null
  private tail: DoublyLinkedListNode<NodeData> | null
  private size: number

  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addFirst (value: NodeData): boolean {
    const newNode = new DoublyLinkedListNode<NodeData>(value)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
      this.size = 1
      return true
    }

    const prevHead = this.head
    newNode.next = prevHead
    this.head.previous = newNode
    this.head = newNode
    this.size++
    return true
  }

  addLast (value: NodeData): boolean {
    const newNode = new DoublyLinkedListNode<NodeData>(value)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
      this.size = 1
      return true
    }

    if (this.tail != null) {
      newNode.previous = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.size++
      return true
    }
    return false
  }

  removeLast (): boolean {
    if (this.head == null) {
      return false
    }

    if (this.size === 1) {
      this.head = null
      this.tail = null
      this.size = 0
      return true
    }

    if (this.tail != null && this.tail.previous != null) {
      this.tail = this.tail.previous
      this.tail.next = null
      this.size--
      return true
    }
    return false
  }

  removeFirst (): boolean {
    if (this.head == null) {
      return false
    }

    if (this.size === 1) {
      this.head = null
      this.tail = null
      this.size = 0
      return true
    }

    if (this.head && this.head.next != null) {
      this.head = this.head.next
      this.head.previous = null
      this.size--
      return true
    }
    return false
  }

  getIndexOf (val: NodeData): number {
    if (this.head == null || this.size < 1) {
      return -1
    }

    if (this.size === 1 && this.head.value !== val) {
      return -1
    }

    let index = 0
    let current = this.head
    while (current.next != null) {
      if (current.value === val) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  getAtIndex (n: number): DoublyLinkedListNode<NodeData> | null {
    if (this.head == null || n > this.size || n < 1) {
      return null
    }

    if (n === 1) {
      return this.head
    }

    let counter = 1
    let current = this.head
    while (counter < n) {
      if (current.next == null) break
      current = current.next
      counter++
    }

    return current
  }
}
