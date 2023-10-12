$(document).ready(function () {
    $('.filter-button').click(function () {
      var value = $(this).attr('data-filter');
      if (value == "all") {
        $('.product-card').show('1000');
      } else {
        $('.product-card').not('.' + value).hide('3000');
        $('.product-card').filter('.' + value).show('3000');
      }
    });
  });
// ============== Product filter End =============

function Login() {
    var Name, Email, Pass;
    Name = document.getElementById("Log-Name").value;
    Email = document.getElementById("Log-Email").value;
    Pass = document.getElementById("Log-Name").value;
    if (Name == "Govind Choudhary" && Email == "govindchoudhary844@gmail.com" && Pass == "Aryan844@") {
        alert("Login Successfull")
        window.open("index.html")
    }
    else {
        alert("User Not Found")
    }

}
// =========================== Scroll Effect =======================
    function Login() {
      var Name, Email, Pass;
    Name = document.getElementById("Log-Name").value;
    Email = document.getElementById("Log-Email").value;
    Pass = document.getElementById("Log-Name").value;
    if (Name == "Govind Choudhary" && Email == "govindchoudhary844@gmail.com" && Pass == "Aryan844@") {
        alert("Login Successfull")
        window.open("index.html")
      }
    else {
        alert("User Not Found")
    }
    }

// ==================send mail=============
// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       name: document.getElementById("email").value,
//       name: document.getElementById("subject").value,
//       name: document.getElementById("message").value,
//     };
  
  
//     const serviceID = "service_q7y8nca";
//     const templateID = "template_8pn25k6";
  
//     email.js.send(serviceID, templateID, params)
//       .then(
//         res => {
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("subject").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("your message sent successfully");
//         }
//       )
  
//       .catch((err) => console.log(err));
//   }


// filterObjects("all");

// function filterObjects(c) {
//     var x, i;
//     x = document.getElementsByClassName("card2");
//     if (c == 'all') c = " ";
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) addClass([i], "show")
//     }
// }

// function addClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");;
//     arr2 = name.split(" ")
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }


// function removeClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");;
//     arr2 = name.split("")
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }