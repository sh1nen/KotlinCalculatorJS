import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {

    window.onload = {
        val zero = document.querySelector(".zero") as HTMLButtonElement
        val period = document.querySelector(".period") as HTMLButtonElement
        val equals = document.querySelector("#eqn-bg") as HTMLButtonElement
        val delete = document.querySelector("#delete") as HTMLButtonElement
        val screen = document.getElementById("result") as HTMLDivElement
        val numbers = document.querySelectorAll(".num")
        val operators = document.querySelectorAll(".operator")
        var output = ""

        for (i in 0 until numbers.length) {
            numbers[i]!!.addEventListener("click", {
                val num = numbers[i]!!.firstChild?.nodeValue
                screen.innerHTML += num
                output = screen.innerHTML
            }, false)
        }

        delete.addEventListener("click", {
            screen.innerHTML = ""
        }, false)

        period.addEventListener("click", {
            if (screen.innerHTML === "")
                output = screen.innerHTML.plus(screen.innerHTML.concat("0."))
            else if (screen.innerHTML === output)
                screen.innerHTML = screen.innerHTML.concat(period.value)
        }, false)

        equals.addEventListener("click", {
            if (screen.innerHTML === output) {
                screen.innerHTML = eval(output)
            } else {
                screen.innerHTML = ""
            }
        }, false)

        zero.addEventListener("click", {
            val zeroButtonValue = zero.value
            if (screen.innerHTML.isBlank()) {
                screen.innerHTML = zeroButtonValue
                output = zeroButtonValue
            } else if (screen.innerHTML === output) {
                screen.innerHTML += zeroButtonValue
                output = screen.innerHTML
            }
        }, false)

        for (i in 0 until operators.length) {
            operators[i]!!.addEventListener("click", {
                val operator = operators[i]!!.firstChild?.nodeValue
                if (screen.innerHTML === "") {
                    screen.innerHTML = screen.innerHTML.concat("")
                } else if (output.isNotBlank()) {
                    screen.innerHTML = output.concat(operator.toString())
                }
            }, false)
        }
    }
}