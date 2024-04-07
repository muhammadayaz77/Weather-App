// console.dir(document.body);
let btn = document.querySelector('.btn');

btn.onclick = () => {
let input = window.document.querySelector('#input').value;
let myApi = '560d95345447bb7733a509551edf52cc';
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myApi}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response);
    window.document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[3].textContent = response.data.name;
    window.document.querySelector('.temp').textContent = response.data.main.temp;
    window.document.body.querySelector('.sp').textContent = response.data.wind.speed;
  })
  .catch(function (error) {
    // handle error
    alert(error);
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


