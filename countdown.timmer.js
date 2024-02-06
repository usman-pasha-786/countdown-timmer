// install date-fns npm for this project from npm
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the time in Seconds :",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter the valid number";
        }
        else if (input > 60) {
            return "Please enter in second like below 60 :";
        }
        else {
            return true;
        }
    }
});
let seconds = res.userInput;
function startTimer(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer End");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTimer(seconds);
