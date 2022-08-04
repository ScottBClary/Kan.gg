# KanjiMVP

This is a kanji learning app similar to WaniKani.



How it works:
Get html code from wikipedia's kanji page.
App.js takes the code and removes non important tables and places result into output.txt
regExRunner.js uses output.txt and creates output2.txt and then output2.txt into a csv
The csv is read into a mysql database


Now the server can run and serve the database files.






// Personal Notes from the Author
Project Goals:

  Have a site that is a replica of wanikani. The app will display a kanji and either the kunyomi or onyomi and the user must type it in.
  The users input should change as it is typing into the characters.
  For instance:
    App displays:  亜

    User types: tsu -> becomes つ

    Types of questions:
    1. Kunyomi reading
    2. Onyomi reading
      {how to separate?}
    ||3. Kanji meaning
    ||4. Vocabulary meaning

  Ideas:
    Pick what grade of kanji you want?
    Pick whether you want to be tested on knowing: at least one, all of them, most common one.




  Way extra:
    Sort kanji into categories like color, animals, direction


How to achieve:
  Data:
    There exists kanji and their meanings on kaggle, but there is no pronunciation.

  Because that data is ripped from a single page on wikipedia, it shouldn't be a problem to scrape that data.
  The alternative would be to use jisho.org and repeatedly search kanji, which may be difficult.

