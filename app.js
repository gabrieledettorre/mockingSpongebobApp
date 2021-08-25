var txtName = document.getElementById("tField");
var txtOutput = document.getElementById("txtOutput");

function alternativeCase(string){
    var output = "";
    string = txtName.value;

    for(var i = 0; i < string.length; i++){
        if (i % 2 != 0) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
         }   
    }
    txtOutput.value =  output;
}

  function resetFunction() {
    document.getElementById("frm1").reset();
  }

  function copyText() {
    txtOutput.select();
    document.execCommand('copy');
  }