

// const validate = document.getElementById("newexpense");
// validate.addEventListener('click',IsEmpty);

const addBtn = document.getElementById("newexpense");
addBtn.addEventListener('click',addItem);

// function IsEmpty() {
    
//     let x = document.forms["myForm"]["location"].value;
//     if (x === "" || x === null) {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
   



function addItem(e){
    e.preventDefault();

    let vloc = document.forms["myForm"]["location"].value;
    if (vloc === "" || vloc === null) {
      alert("Location field must be filled out");
      return false;
    }

    let vdate = document.forms["myForm"]["calendar"].value;
    if (vdate === "" || vdate === null) {
      alert("Date field must be filled out");
      return false;
    }

    let vname = document.forms["myForm"]["item-name"].value;
    if (vname === "" || vname === null) {
      alert("Name field must be filled out");
      return false;
    }

    let vamount = document.forms["myForm"]["amount"].value;
    if (vamount === "" || vamount === null) {
      alert("Amount field must be filled out");
      return false;
    }

    const table = document.getElementById("table");
    const row = document.createElement('tr');
    console.log(row);


    const tdtype= document.createElement("td")
    const tddata= document.createElement("td")
    const tddescription= document.createElement("td")
    const tdamount= document.createElement("td")
    const tdlocation= document.createElement("td")

    tdtype.innerHTML=document.getElementById("types").value;
    tddata.innerHTML=document.getElementById("dates").value;
    tddescription.innerHTML=document.getElementById("descriptionItem").value;
    tdamount.innerHTML=document.getElementById("howmuch").value;
    tdlocation.innerHTML=document.getElementById("loc").value;

    row.appendChild(tdtype);
    row.appendChild(tddata);
    row.appendChild(tddescription);
    
    const dollar = document.createElement("span");
    dollar.textContent = "$";
    tdamount.append(dollar);
    row.appendChild(tdamount);
    row.appendChild(tdlocation);

// delete button

    const x = document.createElement('button');
    x.textContent = "X";
    const rows = document.getElementById("table");
    // row.appendChild(document.createTextNode(rows.value));
    row.appendChild(x);
    table.appendChild(row);

    table.children[0].appendChild(row);

    document.getElementById('form').reset();


};

table.onclick = removetr;

function removetr(e){
    e.preventDefault();
    const tgt = e.target;
    const elements = document.getElementById('table');

    if (tgt.tagName === "BUTTON") {
        
        tgt.closest('tr').remove();
      }

    return false;
}

