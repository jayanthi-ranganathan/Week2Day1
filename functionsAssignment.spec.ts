import { test } from '@playwright/test';

// Task 1: Function Declaration
function userProfile(name: string) {
    console.log("Task 1: Hello, " + name + "!");
}

// Task 2: Arrow Function
const double = (num: number): number => num * 2;

// Task 4: Callback Function 
function getUserData(callback: () => void) {
    setTimeout(() => {
        callback();
    }, 3000);
}

test('JavaScript Assignment Tasks', async () => {
    // Task 1 execution
    userProfile("Testleaf");

    // Task 2 execution
    console.log("Task 2: Double of 5 is", double(5));

    // Task 3: Anonymous Function with setTimeout
    setTimeout(function() {
        console.log("Task 3: This message is delayed by 2 seconds");
    }, 2000);

    // Task 4: Callback Function execution
    getUserData(function() {
        console.log("Task 4: Call Back Function");
    });

     await new Promise(resolve => setTimeout(resolve, 4000));
});