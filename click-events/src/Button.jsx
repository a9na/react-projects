

function Button(){

    //const handleClick = (e) => console.log(e);

    const handleClick = (e) => e.target.textContent = "OUCH!";

 /*   let count = 0;

    //const handleClick = () => console.log("OUCH!")

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }
*/
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)


    //return(<button onClick={handleClick2("Ana")}>Click me </button>)
    // if you add a set of parentheses after a callback, you'll invoke it right away

    //return(<button onClick={() => handleClick2("Ana")}>Click me </button>)

    //return(<button onClick={() => handleClick("Ana")}>Click me </button>)

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me </button>)
}


export default Button