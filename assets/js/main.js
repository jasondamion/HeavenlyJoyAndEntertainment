console.log("Javascript file is connected");


var boy = document.getElementById("boyToHome");

$(boy).on("click", function(){
    alert("Button Clicked")
    window.location.href("/boy");
})