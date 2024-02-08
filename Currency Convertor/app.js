fetch('https://api.frankfurter.app/currencies')
.then(response => response.json()) // Parse the JSON data from the API response
.then(result=> displayDropDown(result))


function displayDropDown(res) {
    let curr = Object.entries(res)
    for  (let i=0;i<curr.length;i++){
        console.log(curr)
    }
}