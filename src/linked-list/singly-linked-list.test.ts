import { SinglyLinkedList } from './singly-linked-list'

const definedCases: Array<number[]> = [
  [12, 345, 2, 6, 7896],
  [555, 901, 482, 1771],
]

describe('SinglyLinkedList ', () => {
  it('should add and remove from end of the list', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const items = definedCases[x]
      const n = items.length
      const ll = new SinglyLinkedList<number>()

      expect(ll.removeLast()).toBe(false)

      for (let i = 0; i < n; i++) {
        expect(ll.addLast(items[i])).toBe(true)
      }

      for (let i = 0; i < n; i++) {
        expect(ll.getAtIndex(i)?.value).toBe(items[i])
      }

      for (let i = 0; i < n; i++) {
        expect(ll.removeLast()).toBe(true)
      }
      expect(ll.removeLast()).toBe(false)
    }
  })

  it('should add and remove from start of the list', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const items = definedCases[x]
      const n = items.length
      const ll = new SinglyLinkedList<number>()

      expect(ll.removeFirst()).toBe(false)

      for (let i = 0; i < n; i++) {
        expect(ll.addFirst(items[i])).toBe(true)
      }

      // for (let i = 0; i < n; i++) {
      //   expect(ll.getAtIndex(i)).toBe(items[i])
      // }

      for (let i = 0; i < n; i++) {
        expect(ll.removeFirst()).toBe(true)
      }
      expect(ll.removeFirst()).toBe(false)
    }
  })

  it('should remove nth element from end of the list', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
    const n = items.length
    const ll = new SinglyLinkedList<number>()

    expect(ll.removeFirst()).toBe(false)

    for (let i = 0; i < n; i++) {
      expect(ll.addLast(items[i])).toBe(true)
    }

    expect(ll.removeNthFromEnd(2)?.value).toBe(6)

    let curr = ll.head
    while (curr) {
      curr = curr.next
    }
  })

  it('should reverse the list', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
    const n = items.length
    const ll = new SinglyLinkedList<number>()

    expect(ll.removeFirst()).toBe(false)

    for (let i = 0; i < n; i++) {
      expect(ll.addLast(items[i])).toBe(true)
    }

    const llReversed = ll.reverseList()
    let curr = llReversed
    while (curr) {
      curr = curr.next
    }
  })
})
