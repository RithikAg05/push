var push = require('web-push');

let idKeys = {
    publicKey: 'BCiHGJfsV3TcPskAKk6V7qYESzhnhi0OKsTYqsZyiPuTLrdDcA7vuXqS5TpqRaHKF2eboNHdZ4ES0shX_VIY66s',        
  privateKey: '2M1oK4r2CkY3YEKUsafFh1MkosDtwVFDZuUffd15ZRQ'
};

push.setVapidDetails('mailto:ragarwal0201@gmail.com', idKeys.publicKey , idKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/f0-7oV895wE:APA91bFAHPF3xnWng1j2p1psJByeOnt24zJS4q5YDmXcC2P8YVuluYgONfJw87bsAVkDUoVA9gimKH68SBgleh7SoACCqAxmIedS8tzhsA_3EryoCIlFhvehN3UxvwOkmliefQ4ZBiPN","expirationTime":null,
            "keys":{"p256dh":"BF3xb_9PBeAyyBK9hQlb68XygDD-pU8shFdZwemzdhmgZC58LEMO9fno6qGxqQUlRbgO8928JT8TNYa_1V-KsS4",
                    "auth":"1YQKoQQYsXiv1-zNkzz2SQ"}};

push.sendNotification(sub, 'test message');