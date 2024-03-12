
// Function to convert CSV to array of objects
function csvToArray(csv) {
    var lines = csv.split('\n');
    var result = [];
    var headers = lines[0].split(',');

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(',');

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result;
}

// Function to create table rows from the array of objects
function createTableRows(data) {
    var table = document.getElementById('playersTable');

    // Clear existing content
    table.innerHTML = '';

    // Create table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement('tbody');
    data.forEach(function (player) {
        var row = document.createElement('tr');
        Object.values(player).forEach(function (value) {
            var td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}

// Read and parse the CSV file
function loadTable() {
    var categoryDropdown = document.getElementById('categoryDropdown');
    var selectedCategory = categoryDropdown.value;

    // Adjust the file names based on data structure
    var fileName = selectedCategory === 'batsmen' ? '../static/Players.csv' : '../static/Bowlers.csv';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var csvData = xhr.responseText;
            var dataArray = csvToArray(csvData);
            createTableRows(dataArray);
        }
    };

    xhr.open('GET', fileName, true);
    xhr.send();
}

// Initial load on page load
loadTable();