// Description:
//   TrollBot
//

var oopMessages = [
  "Como joden con el OOP, eh.",
  "Tu vieja es OOP."
];
var oopLastTime = Date.now();
var oopThresholdMs = 60000;

module.exports = function (robot) {

  robot.hear(/joined #general/, function (msg)
  {
    msg.send("Bienvenido @"+msg.message.user.name+"!");
    msg.finish();
  });

	robot.hear(/(hagamos|hacer|crear) un (canal|channel)/i, function (msg)
	{
		var name = msg.message.user.name;
		msg.send("@"+name+" No. Nada de canales nuevos.");
    msg.finish();
	});
	
	robot.hear(/ oop/i, function (msg)
  {
    var now = Date.now();
    if(now > oopLastTime + oopThresholdMs){
      var message = oopMessages[Math.floor(Math.random()*oopMessages.length)]
      msg.send(message); 
      msg.finish();
      oopLastTime = now;
    }
  });

};
