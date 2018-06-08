exports.run = function(client, message, args) {
const responses = [
  'Fuck off you fat useless sack of fucking yankee dankee doodle shite, fuck off will ya','Feels like I am eating donkey\'s cock',
  'Looks like a bison\'s penis','It\'s fucking redder than your beard','That little fat fucker',
  'Looks like someone pissed in my soup','It\'s RAWWWWWWWWWWWWWWWW!','Fuck me','Fucking donkey\'s dick swinging in front of their face',
  'If that\'s beef then I was born in Bangladesh','It\'s like some Sci-fi sperm','The size is like some dog\'s shap in my shell',
  'It tastes like a stuffing that you stick in the ass end of a turkey','It\'s not a crab cake, it\'s a crap cake',
  'Seafood crepe, yeah that\'s seafood crap','That is fucking disgusting','It\'s almost like you\'ve got a breaded condom in your mouth',
  'You\'re a first class cunt','Fuck off will you',
]
   message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}