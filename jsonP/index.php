<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JsonP Scripts</title>
</head>
<body>
    
    <div id="root"></div>
    <script>
        const scripter = {
            __callback:null,
            fetch(url, callback){
                let script = document.createElement('script');
                script.src = url;
                this.__callback = callback;
                document.head.append(script);
            },
            __asyncMount(receivedResponse){
                let res = JSON.parse(atob(receivedResponse));                
                this.__callback(res);
            },
        }

        scripter.fetch('./script.php',mapHtmlTable);
        
        function mapHtmlTable(rows){
            console.log(rows);
            let root = document.querySelector('#root');
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            let headingRow = document.createElement('tr');

            // populating heading
            Object.keys(rows[0]).forEach(column => {
                let cell = document.createElement('th');
                cell.innerText = column;
                headingRow.appendChild(cell);
            });

            // Adding row to thead element
            thead.appendChild(headingRow);

            // populating the table data            
            let tbody = document.createElement('tbody');
            window.srows = rows;
            Object.values(rows).map((row) => {
                let rowElement = document.createElement('tr');
                Object.values(row).map((cellData) => {
                    let cellElement = document.createElement('td');
                    cellElement.innerText = cellData;
                    rowElement.appendChild(cellElement);
                })
                tbody.appendChild(rowElement);
            })

            table.appendChild(thead);
            table.appendChild(tbody);
            root.appendChild(table);
        }
    </script>
</body>
</html>