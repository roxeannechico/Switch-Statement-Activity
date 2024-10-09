function dayCheck(){
    
    let day = prompt("Enter a day of the week: ");
    switch (day){
        case "Monday":
            alert("Your task for Monday is: Finish your Assignments.");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Water the plants.");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: Clean your room.");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Attend to your online class.");
            break;
        case "Friday":
            alert("Your task for Friday is: Teach your nephew to read.");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Wash your clothes.");
            break;
        case "Sunday":
            alert("Your task for Sunday: Go to church.");
            break;
        default:
            alert("The day of the week only. Try again");
    }
}