const output = document.querySelector("output");
document.getElementById("list").onclick = function () {
    var element = document.getElementById("input").value;
    const taskline = document.createElement("li");
    const del = document.createElement("button");
   
    const newcontent = document.createTextNode(element);
    document.getElementById("input").value = "";
    taskline.appendChild(newcontent);
    document.body.insertBefore(taskline, output);
    const text = document.createTextNode("delete");
    del.appendChild(text);
    document.body.insertBefore(del,output);
    del.setAttribute('class','delete');
    del.setAttribute('id','del');
    taskline.setAttribute('class', 'taskline');
    console.log(element);
    input.focus();
}


// document.getElementById("del").onclick = function () {
//     taskline.remove();
// }