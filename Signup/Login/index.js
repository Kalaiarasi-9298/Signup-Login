let usernames =["Alpha", "Bravo", "Charlie", "Delta", "Frank"];

function  signup(userName){
    let filteresData= usernames.filter((el,i)=> el==userName);
    if (filteresData.length==0) {
        usernames.push(userName)
        console.log("Sign-up successfull....")


        
    }
    else{
        console.log("Already registered....")

    }


}
signup("kalai")
signup("kavya")