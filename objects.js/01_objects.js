const jsUser = {
    name : "sai" ,
    age : 22,
    location : "SF" ,
    email : "sai@reachout.com" ,
    is_Loggedin : false,
    lastloginDays : ["Mon , Sat"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])

///////////////////////////

const course = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor : "hitesh"
}
// course.courseInstructor 

const {courseInstructor : inst} = course

console.log(inst);
