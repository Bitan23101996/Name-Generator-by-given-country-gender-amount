$(document).ready(function () {
    $("#click-btn").click(function () {

        //Retrive the value from html form
        let country = document.getElementById("country").value;
        let gender = document.getElementById("gender").value;
        let amount = document.getElementById("quantity").value;

        // Build the URL
        let url = 'http://uinames.com/api/?';

        // Read the country and append to the url
        if (country !== '') {
            url += `region=${country}&`;
        }

        //Read the Gender and append to the URL
        if (gender !== '') {
            url += `gender=${gender}&`;
        }

        //Read the amount and append to the URL
        if (amount !== '') {
            url += `amount=${amount}&`;
        }
        //console.log(url)

        //AJAX call
        const xhr = new XMLHttpRequest();

        //Connection Open
        xhr.open('GET', url, true);
        // Execute the function
        xhr.onload = function () {
            if (this.status == 200) {
                const data = JSON.parse(this.responseText);
                console.log(data)
                // Insert into the HTML

                let html = '<h2 style="text-align:center;">-:Names:-</h2>';
                html += '<ul class="list">';
                data.forEach(function (data) {
                    html += `
                         <li>${data.name}</li>
                    `;
                });
                html += '</ul>';

                document.querySelector('#result').innerHTML = html;
            }
        }
        //Send the response in html form
        xhr.send()

    })
})