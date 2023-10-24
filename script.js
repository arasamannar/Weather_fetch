/* var covid = fetch("https://data.covid19india.org/v4/min/data.min.json");
covid.then((a)=>a.json()).then(b=>{
   for (const i in b) {
    var state = i;
    var confirmed = b[i].total.confirmed;
    var div = document.createElement("div");
div.innerHTML = `${state} ${confirmed} `;
document.body.append(div);
    }
   }
); */

function bar(n)
{
    return new Promise((resolve,reject) => {setTimeout(()=>resolve(2*n)),3000});
}
function foo()
{
    var v1 = bar(2);
    console.log(v1);
    var v2 = bar(v1);
    console.log(v2);
    var v3 = bar(v2);
    console.log(v3);

}
foo();