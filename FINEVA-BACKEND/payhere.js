// const md5 =require ('crypto-js/md5') ;
const md5 = require('crypto-js/md5');

let merchantSecret  = 'MzA3NjA0ODY2NTU1NzQyODYzMDgwMDYwOTAxNTM5NjI3MDE4Mw==';
let merchantId      = '1223824';
let orderId         = '12345';
let amount          = 1000.00;
let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
let currency        = 'LKR';
let hash            = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();
let first_name="Kavishka";
let last_name= "Nilan De Alwis";
let email="kavishkanilan56@gmail.com";
let phone= "0775128493";
let address="No.1, Galle Road";
let city= "Colombo";
let country="Sri Lanka";
let delivery_address= "No. 46, Galle road, Kalutara South";
let delivery_city= "Kalutara";
let delivery_country= "Sri Lanka";

console .log(hash);

// var isVerified;  

const payment={
checkout1 :async(req,res)=>{
    isVerified = false;
    var merchant_id = req.body.merchant_id; // PayHere Merchant ID of the merchant
    var orderId = req.body.orderId;     // Order ID sent by Merchant to Checkout page
    var payment_id = req.body.payment_id;  // Unique Payment ID generated by PayHere for the processed payment
    var payhere_amount = req.body.payhere_amount;  // Total Amount of the payment
    var payhere_currency = req.body.payhere_currency; // Currency code of the payment (LKR/USD/GBP/EUR/AUD)
    var method = req.body.method; // Payment method selected by the customer. (VISA, MASTER, AMEX, EZCASH, MCASH, GENIE, VISHWA, PAYAPP, HNB, FRIMI)
    var status_code = req.body.status_code;
    var status_message = req.body.status_message; // Message received from payment gateway which the customer tried to pay If the customer made the payment by VISA or MASTER credit/debit card, following parameters will also be available.
    
    // ** for card payments
    if(req.body.card_holder_name){
        var card_holder_name = req.body.card_holder_name;// Card Holder Name
        var card_no = req.body.card_no; // Masked card number (Ex: ************4564)
        var card_expiry = req.body.card_expiry; // Card expiry in format MMYY (Ex: 0122) Payment Status Codes
    } 
    //other custom parameters if available....

// handle transaction status here 
switch(status_code){ 
    case "0" :
       console.log('Transaction is Pending');
       break;
    case "2" :
       console.log("Transaction is Successful");
       // *** verification of payment status *** 
        
       //generate local md5 signature
       var localMd5Sig = (md5(merchant_id+order_id+payhere_amount+payhere_currency+status_code+md5(process.env.PAYHERE_SECRET)));
       console.log(localMd5Sig);
       console.log(merchant_id+order_id+payhere_amount+payhere_currency+status_code);
       console.log(req.body.md5sig);
       
       if(localMd5Sig===req.body.md5sig){
            console.log('Verified')
            isVerified=true;
           // update the database with successfull transation details here
       } else {
            console.log("Unverified")
            isVerified=false;
           // something is wrong
       }
       break;
    case "-1" :
        console.log("Transaction Canceled");
        break;
    case "-2" :
        console.log("Transaction Failed");
        break;
    case "-3":
        console.log("Charged Back");
        break;
    default:
        console.log("Unknown Error");               
}
res.end();
},

checkout2: async(req,res)=>{

    try{
    res.status(200).json({ "first_name":"Kavishka" });
    }catch(error){
        return res.status(500).json({ message: error.message });
    }

console.log(hash);
}

};
module.exports = payment;
