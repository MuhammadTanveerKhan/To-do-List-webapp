let  mod=document.getElementById("theme")
let cont=document.getElementById("cont")
let addtask=document.getElementById("addtask")
let logo=document.getElementById("logo")
let input =document.getElementById("input")
let list = document.getElementById("list");


let  isdark=false;
mod.addEventListener(
    "click",()=>{
        isdark=!isdark
        if(isdark==true){
            document.body.style.backgroundColor="#2E3440"
            cont.style.backgroundColor="#3B4252"
            cont.style.border="2px solid grey"
            document.body.style.color="#ECEFF4"
            logo.style.backgroundColor="#88C0D0"
            addtask.style.backgroundColor="#88C0D0"
            
        }
        else{
            document.body.style.backgroundColor="#eae4ff";
              cont.style.backgroundColor="#ffffff";
              cont.style.border="2px solid rgba(255,255,255)"
               document.body.style.color="#111827"
                logo.style.backgroundColor="#7c5cfc"
            addtask.style.backgroundColor="#7c5cfc"
        }

    }
)
addtask.addEventListener("click", () => {
    if (input.value.trim() === "") {
        return;
    }

    let li = document.createElement("li");
let dlt=document.createElement("button")
let check = document.createElement("input");
check.type = "checkbox";
check.id="check"

dlt.id = "deleteBtn";
    li.innerText = input.value;
dlt.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="25"
     height="30"
     viewBox="0 0 24 24"
     fill="red">
  <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
</svg>
`;
li.prepend(check);
    li.appendChild(dlt)
    list.appendChild(li);
  input.value = "";
  dlt.addEventListener("click",()=>{
     li.remove();
  })
  
  check.addEventListener("click",()=>{
    if(check.checked){
    check.style.accentColor="#4CAF50"
    li.style.backgroundColor="#4CAF50"
     li.style.textDecoration = "line-through";
    }
    else{
        li.style.textDecoration = "none";
        li.style.color = "";
        li.style.backgroundColor=""
    }
  })
});