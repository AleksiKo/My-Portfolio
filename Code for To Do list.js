function someFunc(id) {
    var item = document.getElementById("title").value;
    if ( +item == 0)
        alert('Enter the item!');
    else {
        var tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(""));
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(item));
        var td3 = document.createElement("td");
        td3.innerHTML = '<input type="image" class="del" onclick="delItem()" src="icons8-delete Filled-50.png">'

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
//adding to row classname and attribute onclick
        row.classList.add('current');
        row.setAttribute ("onclick", "this.className=(this.className == 'current' ? 'new' : 'current')");
        tbody.appendChild(row);

        delItem();

    }
    ;
}
//document.getElementById("submit").onclick = someFunc;

/*function delItem(Name) {
    //document.getElementsByClassName(Name)[2].parentNode.parentNode.style.display = 'none';
    //document.getElementsByClassName(Name)[2].closest('tr').style.display = 'none';
//alert (document.getElementById('myTable').tr.sectionRowIndex);
};*/
/*document.getElementsByTagName("tbody")[0].addEventListener("click", function(event) {
    if (event.target.nodeName == "input")
      event.target.closest('tr').style.display = 'none';
  });*/
function delItem() {
    var close = document.getElementsByClassName("del");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
this.closest('tr').style.display = 'none';
}
}
}

/*function emphas() {
    var row = document.getElementById('myTable').getElementsByTagName("tr");
for (i = 0; i < row.length; i++) {
  row[i].onclick = function() {
this.background-color = 'grey';
}
}
}*/