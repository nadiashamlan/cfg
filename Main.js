// Grammar rules
  let rules = {
  "start": ["#Greeting# #Target#!", "#Task#", "#Location#"],

  "Task": ["I have an exciting project on Context Free Grammar! And this is a sample code.",
           "My task is to create a context-free grammar parser in JavaScript.",
           "The assignment involves building a program that generates random sentences using context-free grammar rules.",
           "I have implemented a grammar engine that can generate sentences based on a set of production rules.",
           "My task is to build a context-free grammar generator in JavaScript for natural language processing.",
           "I have been given an assignment on Context Free Grammar! And this is a sample code.",
           "I task is to implement a context-free grammar in Javascript.",
           "The assignment is about generating random sentences using context-free grammar.",
           "I have created a program that generates sentences based on a set of rules.",
           "The task at hand is to implement a context-free grammar in Javascript and generate random sentences."],

  "Greeting": ["Hello", "Hi", "Hey", "Greetings", "How are you doing", "Yo", "What's up",
               "Hi there", "Hola", "Hey there", "Greetings!", "Hiya", "Hello!", "Howdy", "Hi, friend"],

  "Target": ["everyone", "folks", "world", "friends", "you"],

  "Location": ["In the coding world, #Task#", 
                "At our coding bootcamp, #Task#", 
                "In this programming challenge, #Task#",
               "Within the realm of JavaScript, #Task#", 
               "In the land of algorithms, #Task#"
              ]
};

  let grammar;

 
  function GenerateCode(){
    grammar = tracery.createGrammar(rules);
    let result = grammar.flatten("#start#");
    let generated = document.querySelector('.generated');
    generated.innerText=result;

  }
