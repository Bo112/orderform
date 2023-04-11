function validateOrderForm() {
    // uzimamo vrijednosti iz forme
    var fullname = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var houseNumber = document.getElementById("house-number").value;
    var postalCode = document.getElementById("postal-code").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // provjeravamo da li su sva polja popunjena
    if (fullname.trim() == "") {
      alert("Molimo unesite vaše ime i prezime.");
      return false;
    }
    if (address.trim() == "") {
      alert("Molimo unesite vašu adresu.");
      return false;
    }
    if (houseNumber.trim() == "") {
      alert("Molimo unesite vaš kućni broj.");
      return false;
    }
    if (postalCode.trim() == "") {
      alert("Molimo unesite vaš poštanski broj.");
      return false;
    }
    if (city.trim() == "") {
      alert("Molimo unesite vaše mjesto.");
      return false;
    }
    if (phone.trim() == "") {
      alert("Molimo unesite vaš broj telefona.");
      return false;
    }
    if (email.trim() == "") {
      alert("Molimo unesite vaš email.");
      return false;
    }


    // provjeravamo da li su uneseni podaci ispravni
    var nameRegex = /^[a-zA-Z\s]+$/;
    var phoneRegex = /^\d{3}\s\d{3}\s\d{3}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(fullname)) {
      alert("Molimo unesite ispravno ime i prezime (samo slova).");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Molimo unesite ispravan broj telefona (format: 000 111 222).");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Molimo unesite ispravan email.");
      return false;
    }


    // ako su svi podaci ispravni, ispisujemo ih u konzoli
    console.log("Ime i prezime: " + fullname);
    console.log("Adresa: " + address);
    console.log("Kućni broj: " + houseNumber);
    console.log("Poštanski broj: " + postalCode);
    console.log("Mjesto: " + city);
    console.log("Broj telefona: " + phone);
    console.log("Email: " + email);
    console.log();

}