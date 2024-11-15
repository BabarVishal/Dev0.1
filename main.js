let myName = "Vishal";
let age = 21;
let isMarried = true;

if(isMarried == true){
    console.log(myName + " is Married");
}else{
    console.log(myName + "Its not Married");
}


let ans = 0;

for(let i = 0; i < 10; i++){
    ans = ans + 1;
    console.log(ans);
}

//Write a program print all the even number in an array;
const ages = [21, 22, 23, 24, 25, 26];
const numberOfPeople = ages.length;

for(let i = 0; i < numberOfPeople; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}
 


const allUser = [
    {
        name: "Vishal",
        gender: "male",
    },
    {
        name: "Vishal",
        gender: "male",
    },
    {
        name: "Vishal",
        gender: "male",
    },
    {
        name: "Vishal",
        gender: "female",
    }
];

for(let i = 0; i < allUser.length; i++){
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["name"]);
    }
}

