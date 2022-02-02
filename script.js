

document.getElementById("newexpense").addEventListener('click',(e) => {
    e.preventDefault();
    addTableRow();
    document.getElementById('form').reset();
});


function addTableRow(){
   
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

    
    // implement delete button
    const delbutton = document.createElement('button');
    delbutton.innerText = "X";
    row.appendChild(delbutton);

    // delete a row
    delbutton.onclick = (e) =>{
        e.target.parentElement.remove();
    }

    table.children[0].appendChild(row);

};

