function myFunction() {
   
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const hobby = document.getElementById("hobby").value;

    
    const jsonData = {
        name: name,
        age: age,
        email: email,
        hobby: hobby
    };

    document.getElementById("jsonOutput").textContent = JSON.stringify(jsonData, null, 2);
}