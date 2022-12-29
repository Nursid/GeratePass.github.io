
const LowerSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const UpperSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const SymbolSet="!@#$%^&*()?";


//selector
const totallen=document.getElementById("pass-len")
const lowercase=document.getElementById("lower-case");
const uppercase=document.getElementById("upper-case")
const symbol=document.getElementById("symbol")
const number=document.getElementById("number")

const getRandom=(dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)];
} 

const getgenerate=(password="")=>{
if(uppercase.checked){
    password+=getRandom(UpperSet);
}
if(lowercase.checked){
    password+=getRandom(LowerSet);
}
if(number.checked){
    password+=getRandom(numberSet);
}
if(symbol.checked){
    password+=getRandom(SymbolSet);
}
if(password.length<totallen.value){
    return getgenerate(password);
}
document.getElementById("password").value= truncateString(password,totallen.value);
}
getgenerate();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        getgenerate();
    }
)
function truncateString(str, num) {
    if (str.length > num) {
        let substr=str.slice(0, num);
      return substr;
    } else {
      return str;
    }
  }