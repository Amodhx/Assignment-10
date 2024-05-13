let values = [];
let symbols = [];

$(".btnValue").click(function () {
    let text = $(this).text();
    setText(text);
});

$(".symbol").click(function () {
    let text = $(this).text();

    let value = $("#inputField").val();

    $("#inputField").val(value+text)


})

$("#reset").on('click',()=>{
    $("#inputField").val("");
    values = [];
    symbols = [];
})

$("#assign").on('click',()=>{
    let val = $("#inputField").val();
    values = val.split(/[+\-*\/]/);
    const symbolsArray = ['+', '-', '*', '/'];


    for (let i = 0; i < val.length; i++) {
        if (symbolsArray.includes(val[i])) {
            symbols.push(val[i]);
        }
    }

    for (let i = 0; i < values.length - 1; i++) {
        let value1 = values[i];
        let value2 = values[i+1];
        let symbol = symbols[i];
        if (symbol == "+"){
            let result = value1 + value2;
            $("#inputField").val(result)

        }else if (symbol == "-"){

        }else if (symbol == "/"){

        }else if (symbol == "*"){

        }
    }

});

$("#fulstop").on('click',()=>{
    let val = $("#inputField").val();
    $("#inputField").val(val+".")
})

function setText(value) {
    let val = $("#inputField").val();
    $("#inputField").val(val+value)
}
