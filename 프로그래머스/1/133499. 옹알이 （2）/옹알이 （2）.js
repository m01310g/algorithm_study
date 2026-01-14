function solution(babbling) {
    var answer = 0;
    const sounds = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (const word of babbling) {
        let idx = 0;
        let prev = "";
        let ok = true;
        
        while (idx < word.length) {
            let matched = false;
            
            for (const sound of sounds) {
                if (word.startsWith(sound, idx)) {
                    if (sound === prev) {
                        ok = false;
                        break;
                    }
                    prev = sound;
                    idx += sound.length;
                    matched = true;
                    break;
                }
            }
            if (!ok) break;
            if (!matched) {
                ok = false;
                break;
            }
        }
        
        if (ok) count++;
    }
    
    answer = count;
    
    return answer;
}