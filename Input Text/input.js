function greeting() {
    return function() {
        var name = document.getElementById("name").value;
        document.getElementById("hello").innerHTML = 'Hi' + ' ' + name + '!';
        if(!name) {
            document.getElementById("hello").innerHTML = 'What is your name?';
        };
    };
}
document.getElementById("name").oninput=greeting();