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
            if (this.h[p].duration <= this.h[i].duration) break;
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
            
            if (l < n && this.h[l].duration < this.h[smallest].duration) smallest = l;
            if (r < n && this.h[r].duration < this.h[smallest].duration) smallest = r;
            
            if (smallest === i) break;
            [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
            i = smallest;
        }
    }
}

function solution(jobs) {
    var answer = 0;
    jobs.sort((a, b) => a[0] - b[0]);
    
    const heap = new MinHeap();
    
    let t = 0;  // 현재 시간
    let idx = 0;    // 아직 힙에 안 넣은 다음 작업
    let done = 0;   // 처리 완료한 작업 수
    let total = 0;  // 누적 시간 합
    
    while (done < jobs.length) {
        while (idx < jobs.length && jobs[idx][0] <= t) {
            heap.push({ duration: jobs[idx][1], start: jobs[idx][0] });
            idx++;
        }
        if (heap.size() === 0) {
            t = jobs[idx][0];
            continue;
        }
        
        const job = heap.pop()
        t += job.duration;
        total = total + (t - job.start);
        done++;
    }
    
    return Math.floor(total / jobs.length);
}