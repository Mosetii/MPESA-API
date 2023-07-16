const pay = document.getElementById('pay');
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer bsevCfowDFzPJ3st1zndZTOSojHU");

pay.addEventListener('click', (e) => {
    e.preventDefault();

    let phone = document.getElementById('phone').value;

    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
        method: 'POST',
        headers,
        body: JSON.stringify({
          "BusinessShortCode": 174379,
          "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNzE2MTM0NTIx",
          "Timestamp": "20230716134521",
          "TransactionType": "CustomerPayBillOnline",
          "Amount": 1,
          "PartyA": phone,
          "PartyB": 174379,
          "PhoneNumber": phone,
          "CallBackURL": "https://mydomain.com/path",
          "AccountReference": "Elysium",
          "TransactionDesc": "Payment of X" 
        })
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));
})