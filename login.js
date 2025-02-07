if (localStorage.getItem("alex_local")) {
  window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var url = "https://script.google.com/macros/s/AKfycbzYdC_jvzaSe_ngTXCMgWaU3w4085kAfrSQbdT3rTAJtigjXe9ZL79UeRaecDufDJCKxw/exec";

  var data = {
    "username": username,
    "password": password
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(responseText => {
    if (responseText === "success") {
      localStorage.setItem("alex_local", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password!");
    }
  })
  .catch(error => console.error('Error:', error));
});
