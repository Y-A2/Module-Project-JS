document.getElementById("light").addEventListener("click", onClick);
document.getElementById("dark").addEventListener("click", onClick2);
document.getElementById("button").addEventListener("click", cost);
document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("numberly").addEventListener("click", number);

    function number()
    {
        document.getElementById("numberly").classList.add("clicked");
        let unit = document.getElementById("selects").value;
        var a = document.getElementById("inputs2").value ** 2;
        var b = document.getElementById("inputs3").value ** 2;
        document.getElementById("inputs2").value = "";
        document.getElementById("inputs3").value = "";
        let answer1 = a + b;
        let answer2 = Math.sqrt(a + b);
        let final = answer1.toFixed(2);
        let final1 = answer2.toFixed(2);
        document.getElementById("paragraphs").innerHTML = `${final}${unit}²`
        document.getElementById("paragraphs1").innerHTML = `${final1}${unit}`;
    }

    function calculate() {
        document.getElementById("calculate").classList.add("clicked");
        let a1 = +document.getElementById("inputs").value;
        let a2 = +document.getElementById("inputs1").value;
        let option = document.getElementById("select").value;
        document.getElementById("inputs").value = "";
        document.getElementById("inputs1").value = "";
    if (option == "+")
    {
        var answer = a1 + a2;
        var round = answer.toFixed(2);
        document.getElementById("answer").innerHTML = `${a1} + (${a2}) = ${round}.`
    }
    else if (option == "-") {
        var answer = a1 - a2;
        var round = answer.toFixed(2);
        document.getElementById("answer").innerHTML = `${a1} - (${a2}) = ${round}.`
    }
    else if (option == "x")
    {
        var answer = a1 * a2;
        var round = answer.toFixed(2);
        document.getElementById("answer").innerHTML = `${a1} × ${a2} = ${round}.`
    }
    else if (option == "÷")
    {
        var answer = a1 / a2;
        var round = answer.toFixed(2);
        if(a2 == 0)
        {
        document.getElementById("answer").innerHTML = `${a1} ÷ ${a2} = undefined.`
        }
        else {
        document.getElementById("answer").innerHTML = `${a1} ÷ ${a2} = ${round}.`
        }
    }

    }

    function onClick()
    {      
        var body = document.getElementById("body");
        document.getElementById("body").style.backgroundColor = "#FAF8FF";
        document.getElementById("body").style.color = "#202225";
        document.getElementById("light").classList.add("white");
        document.getElementById("dark").classList.remove("black");
        document.getElementById("input").style.color = "#202225";
        document.getElementById("input1").style.color = "#202225";
        document.getElementById("input2").style.color = "#202225";
        document.getElementById("input").classList.remove("working2");
        document.getElementById("input1").classList.remove("working2");
        document.getElementById("input2").classList.remove("working2");
        document.getElementById("button").classList.remove("button2");
        document.getElementById("calculate").classList.remove("button2");
        document.getElementById("inputs").classList.remove("styles2");
        document.getElementById("inputs1").classList.remove("styles2");
        document.getElementById("select").classList.remove("select2");
        document.getElementById("body").classList.remove("body");
        document.getElementById("html").classList.remove("html");
        document.getElementById("border").classList.remove("borders2");
        document.getElementById("light").classList.remove("gray");
        document.getElementById("border1").classList.remove("borders2");
        document.getElementById("border2").classList.remove("borders2");
        document.getElementById("border3").classList.remove("borders2");
        document.getElementById("numberly").classList.remove("button2");
        document.getElementById("inputs2").classList.remove("working2");
        document.getElementById("inputs3").classList.remove("working2");
        document.getElementById("selects").classList.remove("working2");
    }

    function onClick2()
    {
        document.getElementById("body").style.backgroundColor = "#202225";
        document.getElementById("body").style.color = "#FFFFFF";
        document.getElementById("dark").classList.add("black");
        document.getElementById("light").classList.remove("white");
        document.getElementById("input").style.color = "#FAF8FF";
        document.getElementById("input1").style.color = "#FAF8FF";
        document.getElementById("input2").style.color = "#FAF8FF";
        document.getElementById("input").classList.add("working2");
        document.getElementById("input1").classList.add("working2");
        document.getElementById("input2").classList.add("working2");
        document.getElementById("button").classList.add("button2");
        document.getElementById("calculate").classList.add("button2");
        document.getElementById("inputs").classList.add("styles2");
        document.getElementById("inputs1").classList.add("styles2");
        document.getElementById("select").classList.add("select2");
        document.getElementById("body").classList.add("body");
        document.getElementById("html").classList.add("html");
        document.getElementById("border").classList.add("borders2");
        document.getElementById("light").classList.add("gray");
        document.getElementById("border1").classList.add("borders2");
        document.getElementById("border2").classList.add("borders2");
        document.getElementById("border3").classList.add("borders2");
        document.getElementById("numberly").classList.add("button2");
        document.getElementById("inputs2").classList.add("working2");
        document.getElementById("inputs3").classList.add("working2");
        document.getElementById("selects").classList.add("working2");
    }

    function cost()
    {
        document.getElementById("button").classList.add("clicked");
        var pay = +document.getElementById("input").value;
        var tips = +document.getElementById("input1").value;
        var actualCost = document.getElementById("input2").value;
        document.getElementById("input").value = "";
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        var change = actualCost - pay;
        var rounded = change.toFixed(2);
    if (rounded > 0)
    {
        document.getElementById("console").innerHTML = `You owe: $${rounded}, and you have paided a tip of $${tips}!`;
    } else if (change == 0) {
        document.getElementById("console").innerHTML = `You owe nothing, and you have paided a tip of $${tips}!`;
    } else {
        rounded *= -1
        document.getElementById("console").innerHTML = `Change overdue: $${rounded}, and you have paided a tip of $${tips}!`;
    }

    }
