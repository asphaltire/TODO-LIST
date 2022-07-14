const addTask = document.getElementById("list");
const task = document.getElementById("input");
const list = document.getElementById("output");

addTask.onclick = function (){
        
        const child = document.createElement('li');
        child.textContent = task.value;
        list.appendChild(child);
        const del = document.createElement("button");
        del.textContent = "delete";
        list.appendChild(del);
        del.setAttribute("class","delete");
        task.value="";

        del.onclick = function()
        {
            list.removeChild(child);
            list.removeChild(del);
        }
        
        task.focus();

}