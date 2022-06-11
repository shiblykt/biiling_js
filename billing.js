function add() {
  product = document.getElementById('productName').value;
  description = document.getElementById('description').value;
  categories = document.getElementById('category').value;
  subcategories = document.getElementById('SubCategory').value;
  weight = document.getElementById('weight').value;
  unit = document.getElementById('unit').value;
  qty = document.getElementById('quantity').value;
  amount = document.getElementById('amount').value;

  table = document.getElementsByTagName('table')[0];
  newRow = table.insertRow(1);
  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);
  cell3 = newRow.insertCell(2);
  cell4 = newRow.insertCell(3);
  cell5 = newRow.insertCell(4);
  cell6 = newRow.insertCell(5);
  cell7 = newRow.insertCell(6);

  cell2.innerHTML = product;
  cell3.innerHTML = description;
  cell4.innerHTML = categories;
  cell5.innerHTML = subcategories;
  cell6.innerHTML = weight + unit;
  cell7.innerHTML = qty;
}

function store() {
  productname = document.getElementById('productName').value;
  description = document.getElementById('description').value;
  categories = document.getElementById('category').value;
  subcategories = document.getElementById('SubCategory').value;
  weight = document.getElementById('weight').value;
  unit = document.getElementById('unit').value;
  qty = document.getElementById('quantity').value;
  amount = document.getElementById('amount').value;

  arr = [];
  arr.push(
    productname,
    description,
    categories,
    subcategories,
    weight,
    unit,
    qty,
    amount
  );

  window.localStorage.setItem('data', arr);
  //converting object to string
}

function getData() {
  records = window.localStorage.getItem('data');
  dat = [];
  dat = records;
  document.getElementById('p').innerHTML = dat[0];
}
