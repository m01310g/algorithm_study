class Heap {
    constructor(compare) {
        this.h = [];
        this.compare = compare;
    }
    
    size() {
        return this.h.length;
    }
    
    peek() {
        return this.h[0];
    }
    
    push(val) {
        this.h.push(val);
        this._bubbleUp(this.h.length - 1);
    }
    
    pop() {
        if (this.h.length === 0) return undefined;
        if (this.h.length === 1) return this.h.pop();
        
        const root = this.h[0];
        this.h[0] = this.h.pop();
        this._bubbleDown(0);
        return root;
    }
    
    _bubbleUp(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.compare(this.h[p], this.h[i])) break;
            [this.h[i], this.h[p]] = [this.h[p], this.h[i]];
            i = p;
        }
    }
    
    _bubbleDown(i) {
        const n = this.h.length;
        
        while (true) {
            let best = i;
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            
            if (l < n && !this.compare(this.h[best], this.h[l])) best = l;
            if (r < n && !this.compare(this.h[best], this.h[r])) best = r;
            
            if (best === i) break;
            
            [this.h[i], this.h[best]] = [this.h[best], this.h[i]];
            i = best;
        }
    }
}

function solution(operations) {
    var answer = [];
    const minHeap = new Heap((a, b) => a <= b);
    const maxHeap = new Heap((a, b) => a >= b);
    const countMap = new Map();
    
    const cleanHeap = (heap) => {
        while (heap.size() > 0) {
            const top = heap.peek();
            if ((countMap.get(top) || 0) > 0) break;
            heap.pop();
        }
    }
    
    for (const op of operations) {
        const [cmd, val] = op.split(" ");
         
        if (cmd === "I") {
            const num = Number(val);
            minHeap.push(num);
            maxHeap.push(num);
            countMap.set(num, (countMap.get(num) || 0) + 1);
        } else {
            if (val === "1") {
                cleanHeap(maxHeap);
                if (maxHeap.size() > 0) {
                    const num = maxHeap.pop();
                    countMap.set(num, countMap.get(num) - 1);
                }
            } else {
                cleanHeap(minHeap);
                if (minHeap.size() > 0) {
                    const num = minHeap.pop();
                    countMap.set(num, countMap.get(num) - 1);
                }
            }
        }
    }
    
    cleanHeap(maxHeap);
    cleanHeap(minHeap);
    
    if (minHeap.size() === 0) return [0, 0];
    
    return [maxHeap.peek(), minHeap.peek()];
}