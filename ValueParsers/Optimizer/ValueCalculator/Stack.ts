export class Stack<T> {
    
    private arr: T[];
    
    public get size(): number {
      return this.arr.length;
    }
  
    constructor(stack?: Stack<T>) {
      if (stack) {
        this.arr = stack.arr.map(v => v); // deep copy
      }
      else {
        this.arr = [];
      }
    }
  
    public push(item: T): void {
      this.arr.push(item);
    }
  
    public pop(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      else {
        return this.arr.pop();
      }
    }
  
    public peek(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.arr[this.arr.length-1];
    }

    public clear(): void {
      this.arr.length = 0;
    }
  
    public isEmpty(): boolean {
      return this.arr.length === 0;
    }
  }
  