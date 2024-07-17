


function updateResult() {
    // let weightValue = document.getElementById('input-berat-badan').value
    // let heightvalue = document.getElementById('input-tinggi-badan').value
    // let Age = document.getElementById('usia').value
    let weightValue = document.getElementById('input-berat-badan').value





    if (weightValue != null && weightValue != '') {
        document.getElementById('bmi-result').innerHTML = weightValue;
    } else {
        alert('please insert a your weight')
    }


    console.log(parseInt(result));
}