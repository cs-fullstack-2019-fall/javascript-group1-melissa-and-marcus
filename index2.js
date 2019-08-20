

    // Press 1 to list all English to Spanish translations, press 2 to list all Spanish to English translations,
    // press 3 to enter a new English translation, press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.

   let userInput = prompt("Please press '1' for all English to Spanish translations, \n" +
        "press '2' for all Spanish to English translations, press '3' for new English translations, \n" +
        "'4' for new Spanish translations and '5' or 'q' to quit.");
    while (userInput !== '5' && userInput !=='q') {

        let english2 = ["what", "who", "when", "where", "why", "which", "how"];
        let spanish2 = ["Que", "Quien", "Cuando", "Donde", " Por Que", "Cual", "Como"];




        if (userInput === "1") {
            for (let i = 0; i < english2.length; i++) {
                console.log("english word: " + english2[i] + " -translated to spanish word: " + spanish2[i]);
            }
         } else if (userInput === '2') {
            for (let i = 0; i < english2.length; i++) {
                console.log("spanish word: " + spanish2[i] + " -translated to english word: " + english2[i]);
            }
        } else if (userInput === '3') {
            let userInput3 = prompt("enter a english word");
            let userInput2 = prompt("enter translation of english word to spanish");

            english2.push(userInput3);
            spanish2.push(userInput2);
            console.log(english2);
            console.log(spanish2);
        } else if (userInput === '4') {
            userInput2 = prompt("enter a spanish word");
            userInput3 = prompt("enter translation of spanish word to english");

            spanish2.push(userInput2);
            english2.push(userInput3);

            console.log(spanish2);
            console.log(english2);
        }
        userInput = prompt("Please press '1' for all English to Spanish translations, \n" +
            "press '2' for all Spanish to English translations, press '3' for new English translations, \n" +
            "'4' for new Spanish translations and '5' or 'q' to quit.");

    }
    //







