const categories = [{"id":22,"name":"Geography"},{"id":9,"name":"General Knowledge"},{"id":23,"name":"History"}];
const triviaQuestions = [{category:"Entertainment: Video Games",type:"multiple",difficulty:"hard",title:"When was the first Call of Duty title released?",correct_answer:"October 29, 2003",incorrect_answers:["December 1, 2003","November 14, 2002","July 18, 2004"],id:1},{category:"Entertainment: Books",type:"multiple",difficulty:"medium",title:"How many books are in the Chronicles of Narnia series?",correct_answer:"7",incorrect_answers:["6","8","5"],id:2},{category:"Entertainment: Film",type:"boolean",difficulty:"easy",title:"Han Solo's co-pilot and best friend, 'Chewbacca', is an Ewok.",correct_answer:"False",incorrect_answers:["True"],id:3},{category:"General Knowledge",type:"multiple",difficulty:"medium",title:"The Tsar Bomba, the most powerful nuclear bomb ever tested, had a yield of 50 megatons but theoretically had a maximum yield of how much?",correct_answer:"100 Megatons",incorrect_answers:["200 Megatons","75 Megatons","150 Megatons"],id:4},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"Which of these is NOT a terrorist faction in Counter-Strike (2000)?",correct_answer:"Midwest Militia",incorrect_answers:["Phoenix Connection","Elite Crew","Guerrilla Warfare"],id:5},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"Which of these games was the earliest known first-person shooter with a known time of publication?",correct_answer:"Spasim",incorrect_answers:["Doom","Wolfenstein","Quake"],id:6},{category:"Entertainment: Film",type:"multiple",difficulty:"hard",title:"What did Alfred Hitchcock use as blood in the film 'Psycho'? ",correct_answer:"Chocolate syrup",incorrect_answers:["Ketchup","Red food coloring","Maple syrup"],id:7},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"How many Star Spirits do you rescue in the Nintendo 64 video game 'Paper Mario'?",correct_answer:"7",incorrect_answers:["5","10","12"],id:8},{category:"Entertainment: Film",type:"multiple",difficulty:"medium",title:"Who played Batman in the 1997 film 'Batman and Robin'?",correct_answer:"George Clooney",incorrect_answers:["Michael Keaton","Val Kilmer","Christian Bale"],id:9},{category:"Entertainment: Film",type:"multiple",difficulty:"medium",title:"This movie contains the quote, 'What we've got here is a failure to communicate.'",correct_answer:"Cool Hand Luke",incorrect_answers:["Bonnie and Clyde","The Graduate","In the Heat of the Night"],id:10},{category:"Entertainment: Books",type:"multiple",difficulty:"medium",title:"Who wrote the children's story 'The Little Match Girl'?",correct_answer:"Hans Christian Andersen",incorrect_answers:["Charles Dickens","Lewis Carroll","Oscar Wilde"],id:11},{category:"Science & Nature",type:"multiple",difficulty:"hard",title:"An organic compound is considered an alcohol if it has what functional group?",correct_answer:"Hydroxyl",incorrect_answers:["Carbonyl","Alkyl","Aldehyde"],id:12},{category:"Mythology",type:"multiple",difficulty:"medium",title:"Neptune's greek name was...",correct_answer:"Poseidon",incorrect_answers:["Ares","Zeus","Apollo"],id:13},{category:"General Knowledge",type:"multiple",difficulty:"medium",title:"What is a 'dakimakura'?",correct_answer:"A body pillow",incorrect_answers:["A Chinese meal, essentially composed of fish","A yoga posture","A word used to describe two people who truly love each other"],id:14},{category:"Geography",type:"multiple",difficulty:"medium",title:"Which of these countries is NOT located in Africa?",correct_answer:"Suriname",incorrect_answers:["Burkina Faso","Mozambique","Algeria"],id:15},{category:"Entertainment: Comics",type:"multiple",difficulty:"medium",title:"What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",correct_answer:"Calvin and Hobbes",incorrect_answers:["Winnie the Pooh","Albert and Pogo","Peanuts"],id:16},{category:"History",type:"boolean",difficulty:"easy",title:"The United States was a member of the League of Nations.",correct_answer:"False",incorrect_answers:["True"],id:17},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"In the 2002 video game 'Kingdom Hearts', how many playable worlds were there?",correct_answer:"14",incorrect_answers:["13","16","11"],id:18},{category:"General Knowledge",type:"multiple",difficulty:"hard",title:"What is the romanized Korean word for 'heart'?",correct_answer:"Simjang",incorrect_answers:["Aejeong","Jeongsin","Segseu"],id:19},{category:"Sports",type:"multiple",difficulty:"hard",title:"Where was the Games of the XXII Olympiad held?",correct_answer:"Moscow",incorrect_answers:["Barcelona","Tokyo","Los Angeles"],id:20},{category:"History",type:"multiple",difficulty:"hard",title:"When was the SS or Schutzstaffel established?",correct_answer:"April 4th, 1925",incorrect_answers:["September 1st, 1941","March 8th, 1935","February 21st, 1926"],id:21},{category:"General Knowledge",type:"boolean",difficulty:"easy",title:"You can legally drink alcohol while driving in Mississippi.",correct_answer:"True",incorrect_answers:["False"],id:22},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"Which of these is the name of a cut enemy from 'Half-Life 2'?",correct_answer:"Hydra",incorrect_answers:["Cthulu","Spike","Tremor"],id:23},{category:"Entertainment: Film",type:"multiple",difficulty:"medium",title:"Who played Baron Victor Frankestein in the 1957 Hammer horror film 'The Curse of Frankenstein'?",correct_answer:"Peter Cushing",incorrect_answers:["Boris Karloff","Vincent Price","Lon Chaney Jr."],id:24},{category:"Vehicles",type:"multiple",difficulty:"medium",title:"Which car brand does NOT belong to General Motors?",correct_answer:"Ford",incorrect_answers:["Buick","Cadillac","Chevrolet"],id:25},{category:"Vehicles",type:"multiple",difficulty:"medium",title:"What do the 4 Rings in Audi's Logo represent?",correct_answer:"Previously independent automobile manufacturers",incorrect_answers:["States in which Audi makes the most sales","Main cities vital to Audi","Countries in which Audi makes the most sales"],id:26},{category:"Animals",type:"multiple",difficulty:"hard",title:"What is the Gray Wolf's scientific name?",correct_answer:"Canis Lupus",incorrect_answers:["Canis Aureus","Canis Latrans","Canis Lupus Lycaon"],id:27},{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",title:"In vanilla Minecraft, which of the following cannot be made into a block?",correct_answer:"Charcoal",incorrect_answers:["Coal","Wheat","String"],id:28},{category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",title:"Which is not a playable character in the 2005 video game Killer7?",correct_answer:"Frank Smith",incorrect_answers:["Mask de Smith","Dan Smith","Coyote Smith"],id:29},{category:"Entertainment: Television",type:"multiple",difficulty:"easy",title:"What country is Cory in the House set in?",correct_answer:"The United States of America",incorrect_answers:["Canada","Venezuala","England"],id:30},{category:"History",type:"multiple",difficulty:"easy",title:"What was the first sport to have been played on the moon?",correct_answer:"Golf",incorrect_answers:["Football","Tennis","Soccer"],id:31},{category:"Vehicles",type:"multiple",difficulty:"hard",title:"What engine is in the Lexus SC400?",correct_answer:"1UZ-FE",incorrect_answers:["2JZ-GTE","7M-GTE","5M-GE"],id:32},{category:"Entertainment: Music",type:"multiple",difficulty:"hard",title:"Which year was the album 'Floral Shoppe' by Macintosh Plus released?",correct_answer:"2011",incorrect_answers:["2014","2013","2012"],id:33},{category:"Entertainment: Television",type:"multiple",difficulty:"hard",title:"Which country does the YouTuber 'SinowBeats' originate from?",correct_answer:"Scotland",incorrect_answers:["England","Sweden","Germany"],id:34},{category:"Entertainment: Film",type:"boolean",difficulty:"hard",title:"'Cube', 'Cube 2: Hypercube' and 'Cube Zero' were directed by the same person.",correct_answer:"False",incorrect_answers:["True"],id:35},{category:"Entertainment: Music",type:"boolean",difficulty:"medium",title:"EDM label Monstercat signs tracks instead of artists.",correct_answer:"True",incorrect_answers:["False"],id:36},{category:"Geography",type:"multiple",difficulty:"medium",title:"How tall is One World Trade Center in New York City?",correct_answer:"1,776 ft",incorrect_answers:["1,888 ft","1,225 ft","1,960 ft"],id:37},{category:"Geography",type:"multiple",difficulty:"hard",title:"What is the name of rocky region that spans most of eastern Canada?",correct_answer:"Canadian Shield",incorrect_answers:["Rocky Mountains","Appalachian Mountains","Himalayas"],id:38},{category:"History",type:"multiple",difficulty:"easy",title:"How was Socrates executed?",correct_answer:"Poison",incorrect_answers:["Decapitation","Firing squad","Crucifixion "],id:39},{category:"Sports",type:"multiple",difficulty:"easy",title:"What year did the New Orleans Saints win the Super Bowl?",correct_answer:"2009",incorrect_answers:["2008","2010","2011"],id:40},{category:"General Knowledge",type:"multiple",difficulty:"medium",title:"When was Hubba Bubba first introduced?",correct_answer:"1979",incorrect_answers:["1984","1972","1980"],id:41},{category:"Geography",type:"multiple",difficulty:"easy",title:"What is the capital of Spain?",correct_answer:"Madrid",incorrect_answers:["Barcelona","Sevilla","Toledo"],id:42},{category:"Entertainment: Cartoon & Animations",type:"multiple",difficulty:"easy",title:"In the show 'Steven Universe', who are the main two employees of The Big Donut?",correct_answer:"Sadie and Lars",incorrect_answers:["Steven and James","Erik and Julie","Bob and May"],id:43},{category:"Geography",type:"multiple",difficulty:"easy",title:"What is the capital of India?",correct_answer:"New Delhi",incorrect_answers:["Bejing","Montreal","Tithi"],id:44},{category:"Entertainment: Television",type:"multiple",difficulty:"easy",title:"In season one of the Netflix political drama 'House of Cards', what government position does Frank Underwood hold?",correct_answer:"House Majority Whip",incorrect_answers:["Attorney General","President","Chief of Staff"],id:45},{category:"History",type:"multiple",difficulty:"medium",title:"What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",correct_answer:"Hampton Court",incorrect_answers:["St James's Palace","Buckingham Palace","Coughton Court"],id:46},{category:"Entertainment: Japanese Anime & Manga",type:"multiple",difficulty:"hard",title:"Which one of these characters is from 'Legendz : Tale of the Dragon Kings'?",correct_answer:"Shiron",incorrect_answers:["Jack","Axia","Drum"],id:47},{category:"Entertainment: Music",type:"multiple",difficulty:"medium",title:"What was David Bowie's real surname?",correct_answer:"Jones",incorrect_answers:["Johnson","Edwards","Carter"],id:48},{category:"Entertainment: Japanese Anime & Manga",type:"multiple",difficulty:"medium",title:"In Pok&eacute;mon Chronicles, why was Misty afraid of Gyarados?",correct_answer:"She crawled into it's mouth as a baby.",incorrect_answers:["She found it scary.","She was badly injured from it.","It is part Bug."],id:49},{category:"Celebrities",type:"multiple",difficulty:"medium",title:"In which of these TV shows did the chef Gordon Ramsay not appear?",correct_answer:"Auction Hunters",incorrect_answers:["Ramsay's Kitchen Nightmares","Hotel Hell","Hell's Kitchen"],id:50}];

export {
  categories,
  triviaQuestions
}