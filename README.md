# KanjiMVP

This is a kanji learning app similar to WaniKani.

jōyō kanji are kanji that japanese students are required to learn.

The 2,136 kanji in the jōyō kanji consist of:

1,026 kanji taught in primary school (Grade 1-6) (the kyōiku kanji)
1,110 additional kanji taught in secondary school (Grade 7-12)

How to use this program:
Fill your local mysql database with the kanji from the csv using dbPopulator file (change the file location and login info to your info)
Pick a grade (currently just 1-3)
Press enter or click "get kanji" to get a random kanji that a Japanese student from that grade would be required to know
Type in the pronunciation and press enter to see if you are correct.
The app will tell you the result and the correct pronounciation, then you simply press enter to get another random one from that grade.




How it works:

Get html code from wikipedia's kanji page.
App.js takes the code and removes non important tables and places result into output.txt
regExRunner.js uses output.txt and creates output2.txt and then output2.txt into a csv
The csv is read into a mysql database


Now the server can run and serve the database files.

<img width="881" alt="Screen Shot 2022-08-04 at 2 46 41 PM" src="https://user-images.githubusercontent.com/14322119/182940888-b4037bd5-69d8-4d1f-b2f7-0a76cfea887f.png">




// Personal Notes from the Author IGNORE
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

