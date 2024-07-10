// switch case is just if else statements with predefined options.

let day = 8;
switch(day){
    case 1:
        console.log("sunday");
        break;                          // break is mandatory otherwise it will keep going till end.
    case 2:
        console.log("Monday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Sat");
        break;
    default:                            // default is the default value when no case matched the condtion in switch statement.
        console.log("invalid day");
        break;
}