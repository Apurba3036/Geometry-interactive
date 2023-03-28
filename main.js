
function triangle() {

    const b = parseFloat(document.getElementById('triangle-b').value);
    const h = parseFloat(document.getElementById('triangle-h').value);
    const area = .5 * b * h;

    return area;

}

function rec() {

    const w = parseFloat(document.getElementById('rec-w').value);
    const l = parseFloat(document.getElementById('rec-l').value);
    const area = w * l;

    return area;


}


function convert(element) {

    const areacm = parseFloat(document.getElementById(element).innerText);
    const aream = areacm / (100 * 100);

    return aream;

}


// triangle

document.getElementById('triangle-area').addEventListener('click', function () {

    const area = triangle()

    document.getElementById('area-calculate').style.display = "block"

    document.getElementById('tri-total').innerText = area;




})




document.getElementById('tri-convert').addEventListener('click', function () {

    const meter = convert('tri-total');

    document.getElementById('tri-total').innerText = meter;



    document.getElementById('trimeter').innerText = "m";



})



//rectangle


document.getElementById('rec-area').addEventListener('click', function () {

    const area = rec()

    document.getElementById('area-calculate2').style.display = "block"

    document.getElementById('rec-total').innerText = area;




})




document.getElementById('rec-convert').addEventListener('click', function () {

    const meter = convert('rec-total');

    document.getElementById('rec-total').innerText = meter;



    document.getElementById('recmeter').innerText = "m";



})


// Here I have done only two elements triangle and rectangle.The others are same.



