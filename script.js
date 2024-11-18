//DOM Manipulation

//element.innerHTML
const pengantar = document.getElementById('introduction');
pengantar.innerHTML = 'Ini adalah kalimat pengantar, yang diisikan melalui JavaScript';

//element.setAttribute
const kategori = document.querySelector('section#vegetables');
kategori.setAttribute('name', 'sayuran');