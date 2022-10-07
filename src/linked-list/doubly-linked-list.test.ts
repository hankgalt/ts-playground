import { DoublyLinkedList } from './doubly-linked-list'

const definedCases: Array<number[]> = [
  [12, 345, 2, 6, 7896],
  [555, 901, 482, 1771],
]

describe('DoublyLinkedList ', () => {
  it('should add and remove from end of the list', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const items = definedCases[x]
      const n = items.length
      const ll = new DoublyLinkedList<number>()

      expect(ll.removeLast()).toBe(false)

      for (let i = 0; i < n; i++) {
        expect(ll.addLast(items[i])).toBe(true)
      }

      // for (let i = 0; i < n; i++) {
      //   expect(ll.getAtIndex(i)).toBe(items[i])
      // }

      for (let i = 0; i < n; i++) {
        expect(ll.removeLast()).toBe(true)
      }
      expect(ll.removeLast()).toBe(false)
    }
  })
})
