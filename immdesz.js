//1st assignment 
//write a function that takes a user as a input and greets them with their name and age

function greet1(fname, fage){ //function that takes two input 
    console.log("Hello there, " + fname +" It's a pleasure to meet you, "+ "You are "+ fage +" year old");
}
greet1("XYZ",3892);
//------------------------------------------------------------------------------------------------------------------------------------------------

//2nd assignment
//write a function that takes a new object as input which has name ,age and gender and greets the user with their gender

function greet2(user){ //user is object tht have name,age and gender
    console.log("Hello there, " + user.fname +" It's a pleasure to meet you, "+ "You are a "+ user.fgender);
}
let user =
{
    fname:"text_subject_001",
    fage:2,
    fgender:"male"
};
greet2(user)
//-------------------------------------------------------------------------------------------------------------------------------------------------
//3rd assignment
//tell if they are eligable for vote or not
function greet3(user){
    if(user2.fage === 18){
        console.log("Hello there, " + user2.fname +" It's a pleasure to meet you");
        console.log(" you are elgiable to vote")
    }else{
        console.log("you are not elgiabel")
    }
}
let user2 = {
    fname:"text_subject_001",
    fage:2,
    fgender:"male"
}
greet3(user2)
//-------------------------------------------------------------------------------------------------------------------------------------------------