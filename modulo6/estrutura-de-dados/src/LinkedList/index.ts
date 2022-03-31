import { LinkedListNode} from "./ListNode";

export class LinkedList {
    constructor(
        public start: LinkedListNode | null = null
    ) {}

    public addToEnd(value: any): void{
        if(!this.start) {
            this.start = new LinkedListNode(value)
        } else {
            let currentNode = this.start
            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = new LinkedListNode(value)
        }

    }

    public printList(): void {
        let node: LinkedListNode| null = this.start
        let i = 1

        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next
            i++
        }
    }
}

export const myLinkedList = new LinkedList()