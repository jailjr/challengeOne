const button = document.getElementById('buttonID')




button.addEventListener('click', function() {
  let email = document.getElementById('form').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('email', convertData)

});