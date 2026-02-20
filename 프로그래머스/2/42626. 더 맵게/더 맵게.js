class MinHeap {
    constructor() {
        this.h = [];
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
            if (this.h[p] <= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    
    _bubbleDown(i) {
        const n = this.h.length;
        while (true) {
            let smallest = i;
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            
            if (l < n && this.h[l] < this.h[smallest]) smallest = l;
            if (r < n && this.h[r] < this.h[smallest]) smallest = r;
            
            if (smallest === i) break;
            [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
            i = smallest;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (const s of scoville) heap.push(s);
    
    let count = 0;
    
    while (heap.size() >= 2 && heap.peek() < K) {
        const a = heap.pop();   // 가장 작은 값
        const b = heap.pop();   // 두 번째로 작은 값
        heap.push(a + b * 2);
        count++;
    }
    
    return heap.peek() >= K ? count : -1;
}