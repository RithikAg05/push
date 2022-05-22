var push = require('web-push');

let idKeys = {
    publicKey: 'BCiHGJfsV3TcPskAKk6V7qYESzhnhi0OKsTYqsZyiPuTLrdDcA7vuXqS5TpqRaHKF2eboNHdZ4ES0shX_VIY66s',        
  privateKey: '2M1oK4r2CkY3YEKUsafFh1MkosDtwVFDZuUffd15ZRQ'
};

push.setVapidDetails('mailto:mail@eg.com', idKeys.publicKey , idKeys.privateKey);

let sub = {
        "endpoint":"https://fcm.googleapis.com/fcm/send/fJBViIebidI:APA91bHWP7PC7gbHr-btSk60aowqGwdi9W6XKpemkryT6nsWp5VsB3hOJKrSEFabFhG8racfcWP0p6lysNjdFfrm8qKGdPd9znoT19TxI40cBjJGhVmv-S2tQBqbPPC7pdNOY_tBcz6i","expirationTime":null,"keys":{"p256dh":"BElByk9eGlKW3C6hOb2cgi9g02kH9p7-80vO4my1j1g3axrXx6a77XlT29r6Gb6TGfAsHdWpLrAo8vgdwjsipYY","auth":"5WCF5RNNoUf3y4pC9Ww68A"},
               };
let sub2 ={"endpoint":"https://fcm.googleapis.com/fcm/send/cem2SIZnowQ:APA91bF-tnK0bSCjfKSRLBmfn1zMNWB_Aw34dL8s4IX9ZW-l3RoUaVUfQxSKhpOuI9HII5Gmp5ymHu-RLhqlIJNcPbh9rBZwzpLN_eNZaDKIfKIiGAcoKpFHG0ixHgikIc1klEcTuCi-","expirationTime":null,"keys":{"p256dh":"BJFUrvzU9LaqyYFtbXRzbAA_B8UBarJ6Q1TRD1pBegKhy_kyFxQRTJS6m4_S0feovQW6JkMqJFHYZn_qj4xHiO0","auth":"WZm5ZAt1vIiWktxUbKCrbA"}
};
push.sendNotification(sub, 'test message');
push.sendNotification(sub2, 'test message');