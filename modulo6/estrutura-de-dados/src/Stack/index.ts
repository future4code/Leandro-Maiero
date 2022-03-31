import {LinkedList} from "../LinkedList/index"
import {LinkedListNode} from "../LinkedList/ListNode"


class Stack {
   constructor(
      public frames: LinkedList = new LinkedList()
   ) { }

   public isEmpty = (): boolean => this.frames.start === null

   public push = (
      value: any
   ): void => {
      this.frames.addToTail(value)
   }

   public pop = (): any => {
      
      if(!this.isEmpty()) return null

      let previousNode: LinkedListNode | null = null
      let currentNode: LinkedListNode | null = this.frames.start

      while(currentNode!.next){
         previousNode = currentNode
         currentNode = currentNode!.next 
      }

      previousNode!.next = null

      return currentNode

   }
   public printList(): void {
      let node: LinkedListNode | null = this.frames.start
      let i = 1

      while (node !== null) {
          console.log(`Elemento ${i}: `, node!.value)
          node = node!.next
          i++
      }
  }
}

