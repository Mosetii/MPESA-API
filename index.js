let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer vSkjCNHvlgi2ciE5WtUgU5bY2vPs");

fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNzE2MTMyNzQx",
    "Timestamp": "20230716132741",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254741114770,
    "PartyB": 174379,
    "PhoneNumber": 254741114770,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "ELYSIUMLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));