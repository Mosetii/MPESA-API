let unirest = require('unirest');
let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
.headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer bsevCfowDFzPJ3st1zndZTOSojHU'
})
.send(JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNzE2MTM0NTIx",
    "Timestamp": "20230716134521",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254708374149,
    "PartyB": 174379,
    "PhoneNumber": 254741114770,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "Elysium",
    "TransactionDesc": "Payment of X" 
  }))
.end(res => {
    if (res.error) throw new Error(res.error);
    console.log(res.raw_body);
});