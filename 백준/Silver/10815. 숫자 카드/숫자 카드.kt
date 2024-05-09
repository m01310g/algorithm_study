fun main() {
    val n = readln().toInt()
    // set으로 저장하여 빠르게 요소 확인 가능
    val myArr = readln().split(" ").map { it.toInt() }.toSet()

    val m = readln().toInt()
    val cmpArr = readln().split(" ").map { it.toInt() }

    val resultArr = IntArray(m) { 0 }

    for (i in cmpArr.indices) { // indices -> 0..m-1
        if (cmpArr[i] in myArr) {
            resultArr[i] = 1
        } else {
            resultArr[i] = 0
        }
    }
    print(resultArr.joinToString(" "))
}