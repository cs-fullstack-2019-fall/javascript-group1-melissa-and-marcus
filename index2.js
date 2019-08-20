

    // Press 1 to list all English to Spanish translations, press 2 to list all Spanish to English translations,
    // press 3 to enter a new English translation, press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.
let userInput ="";
    while (userInput!== '5' || userInput !=='q'){

         userInput = prompt("Please press '1' for all English to Spanish translations, \n" +
            "press '2' for all Spanish to English translations, press '3' for new English translations, \n" +
            "'4' for new Spanish translations and '5' or 'q' to quit.");


        if(userInput = 1){
            console.log(englishArray);
        }
        else if(userInput = 2){
            console.log(spanishArray);
        }
        // else if(userInput = 3){
        //  ;
        //  
        // }
        // else if(userInput = 4){
        //     ;
        // }
        userInput = prompt("Please press '1' for all English to Spanish translations, \n" +
            "press '2' for all Spanish to English translations, press '3' for new English translations, \n" +
            "'4' for new Spanish translations and '5' or 'q' to quit.");
    }





// let spanishArray = [ "Sí", "No","Tal vez", "Siempre", "Nunca","Claro"];
// let englishArray =["Yes","No", "May be", "Always", "Never", "Of course"];
//
// spanishArray.push = (userInput);
// englishArray.push = (userInput);
