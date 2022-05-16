var push = require('web-push')

let idKeys = {
    publicKey: 'BCiHGJfsV3TcPskAKk6V7qYESzhnhi0OKsTYqsZyiPuTLrdDcA7vuXqS5TpqRaHKF2eboNHdZ4ES0shX_VIY66s',        
  privateKey: '2M1oK4r2CkY3YEKUsafFh1MkosDtwVFDZuUffd15ZRQ'
}

push.setVapidDetails('ragarwal0201@gmail.com', idKeys.publicKey , idKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')