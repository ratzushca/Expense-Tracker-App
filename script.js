const addBtn = document.getElementById("newexpense");
addBtn.addEventListener('click',addItem);


function addItem(e){
    e.preventDefault();

    const table = document.getElementById("table");
    const row = document.createElement("tr");
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
    row.appendChild(tdamount);
    row.appendChild(tdlocation);

    table.children[0].appendChild(row);
    

};