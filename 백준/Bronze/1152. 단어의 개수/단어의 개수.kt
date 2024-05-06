fun main() {
    val sentence = readln().split(" ").toMutableList()
    sentence.removeAll(listOf(""))
    print("${sentence.size}")
}