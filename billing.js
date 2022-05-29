function billing(){
    s=1
    product = document.getElementById('productName').value
    if(product==''){
        productName.style.borderColor = 'red'
        s=0
    }else{
        productName.style.borderColor = 'green'
        s=1

    }

    if(s==0){
        return false
    }
}

function add(){
       product = document.getElementById('productName').value
       description = document.getElementById('description').value
       categories = document.getElementById('category').value
       subcategories = document.getElementById('SubCategory').value
       weight = document.getElementById('weight').value
       unit = document.getElementById('unit').value
       qty = document.getElementById('quantity').value
       amount = document.getElementById('amount').value

       table = document.getElementsByTagName('table')[0]
       newRow = table.insertRow(1)
       cell1 = newRow.insertCell(0)
       cell2 = newRow.insertCell(1)
       cell3 = newRow.insertCell(2)
       cell4 = newRow.insertCell(3)
       cell5 = newRow.insertCell(4)
       cell6 = newRow.insertCell(5)
       cell7 = newRow.insertCell(6)

       cell2.innerHTML = product
       cell3.innerHTML = description
       cell4.innerHTML = categories
       cell5.innerHTML = subcategories
       cell6.innerHTML = weight+unit
       cell7.innerHTML = qty
       

       
    }

    function store(){
       description = document.getElementById('description').value
       categories = document.getElementById('category').value
       subcategories = document.getElementById('SubCategory').value
       weight = document.getElementById('weight').value
       unit = document.getElementById('unit').value
       qty = document.getElementById('quantity').value
       amount = document.getElementById('amount').value
       key = document.getElementById('productName').value; //gets the key from the user

        const product = {
        description: description,
        categories: categories,
        subcategories: subcategories,
        weight: weight,
        unit: unit,
        qty: qty,
        amount: amount,
        }

window.localStorage.setItem(key,JSON.stringify(product));  
//converting object to string
    }

    function getData() {
        key = document.getElementById('productName').value
        records = window.localStorage.getItem(key)
    } 
    function showData(){
        getData()
        table2 = document.getElementById("table2")
        for(i=0;i<records.length;i++){
            r = table2.insertRow()
            cell1 = r.insertCell()
            cell2 = r.insertCell()
            cell3 = r.insertCell()
            cell4 = r.insertCell()
            cell5 = r.insertCell()
            cell6 = r.insertCell()
            cell7 = r.insertCell()

            cell2.innerHTML = records[i].product
            cell3.innerHTML = records[i].description
            cell4.innerHTML = records[i].categories
            cell5.innerHTML = records[i].subcategories
            cell6.innerHTML = records[i].weight
            cell7.innerHTML = records[i].qty
        }
    }