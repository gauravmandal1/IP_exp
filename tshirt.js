function validateForm() {
    // Part A

    const values = [
        document.forms["myForm"]["Address"].value,
        document.forms["myForm"]["color"].value,
        document.forms["myForm"]["size"].value,
        document.forms["myForm"]["payment"].value,
    ];

    const hasEmptyFields = Object.values(values).some(
        (element) => element === ""
    );

    if (hasEmptyFields) {
        alert("Please fill in all fields");
        return;
    }
    

    document.getElementById("Address").value = "";
    var ele = document.getElementsByName("color");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("payment");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;

    const receipt_formatted = `Thank you for shopping!\nHere's your receipt:\nDate: ${new Date().toLocaleDateString(
        "UK"
    )}\nAddress: ${values[0]}\nColor: ${values[1]}\nSize: ${
        values[2]
    }\nPayment Method: ${values[3]}`;

    alert(receipt_formatted);
}

const form = document.getElementById("shirt_cart");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();
});