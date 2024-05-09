fun main() {
    val s = readln()
    val subSet = mutableSetOf<String>()

    for (start in 0..s.length) {
        for (end in start+1..s.length) {
            subSet.add(s.substring(start, end))
        }
    }
    print(subSet.size)
}