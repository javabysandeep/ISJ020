try {
    //error prone code
   // const data = JSON.parse("not valid json");
    throw new SyntaxError(`Unexpected token 'o', "not valid json" is not valid JSON`);
    console.log(data);
    console.log("try block"); // wont run

} catch (error) {
    //custom handler
    //if there is an error then only control will come here
    console.log(`Catch block - Syntax Error : ${error.name}`);
    console.log(`Catch block - Syntax Error : ${error.message}`);
} finally {
    // it will always be executed whether ther is an error or not
    console.log("finally block");
}