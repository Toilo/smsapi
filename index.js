//NEXMO LIBRARY
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: "4193ab4c",
    apiSecret: "yKzwJxqpmmgmiY8V"
})

nexmo.message.sendSms(
    'CHANGE', '27769826695', 'Dear valued client of capitec your capitec account has been hacked, Contact us ASAP',
    (err, responseData)=>{
        if(err){
            console.log(err)
        }else{
            console.dir(responseData);
        }
    })

//CLOCKWORK LIBRARY
// const clockwork = require('clockwork')({key:'e4da89622d907b62674e9c33f491d87e62beaa9e'});

// clockwork.sendSms({ To: '27783468143', Content: 'Test!'}, 
//   function(error, resp) {
//     if (error) {
//         console.log('Something went wrong', error);
//     } else {
//         console.log('Message sent',resp.responses[0].id);
//     }
// });

