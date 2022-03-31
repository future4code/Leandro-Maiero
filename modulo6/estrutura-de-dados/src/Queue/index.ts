import { LinkedListNode } from "../LinkedList/ListNode"

class Queue {
    printList() {
        throw new Error("Method not implemented.")
    }
    constructor(
       public items: any[] = []
    ) { }
 
    public isEmpty = (): boolean => this.items.length === 0
 
    public enqueue = (
       value: any
    ): void => {
       const index = this.items.length
       this.items[index] = value
    }
 
    public dequeue = (): LinkedListNode | null => {
 
       const removedItem = this.items[0]
 
       for (let i = 0; i < this.items.length; i++) {
          this.items[i] = this.items[i + 1];
       }
 
       this.items.length--
 
       return removedItem
    }
 }

const myQueue = new Queue()

myQueue.enqueue(5)
myQueue.enqueue(9)
myQueue.enqueue(14)
myQueue.printList()







