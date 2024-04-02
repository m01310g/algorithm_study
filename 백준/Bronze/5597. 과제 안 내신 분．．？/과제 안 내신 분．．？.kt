package com.umc.boj

import java.util.ArrayList

class Week1 {
    /*
    fun sol10869() {
        val str = readln().split(" ")
        val a = str[0].toInt()
        val b = str[1].toInt()

        println(a+b)
        println(a-b)
        println(a*b)
        println(a/b)
        println(a%b)
    }
     */

    /*
    fun sol10926() {
        val str = readln()
        println("${str}??!")
    }
     */

    /*
    fun sol10818() {
        val n = readln().toInt()
        val arr = arrayListOf<Int>()

        for (i in 1..n) {
            arr.add(readln().toInt())
        }

        println("${arr.min()} ${arr.max()}")
    }
     */

    fun sol5597() {
        val arr = ArrayList<Int>()
        repeat(28) {
            arr.add(readln().toInt())
        }

        val resultarr = arrayListOf<Int>()
        for (i in 1..30) {
            if (i !in arr) {
                resultarr.add(i)
            }
        }
        println(resultarr.min())
        println(resultarr.max())
    }
}

fun main() {
    // Week1().sol10869()
    // Week1().sol10926()
    // Week1().sol10818()
    Week1().sol5597()
}