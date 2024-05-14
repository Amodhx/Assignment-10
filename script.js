
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
})

$("#assign").on('click',()=>{
    let val = $("#inputField").val();
    let eval1 = eval(val);
    $("#inputField").val(eval1);

});

$("#fulstop").on('click',()=>{
    let val = $("#inputField").val();
    $("#inputField").val(val+".")
})

function setText(value) {
    let val = $("#inputField").val();
    $("#inputField").val(val+value)
}
