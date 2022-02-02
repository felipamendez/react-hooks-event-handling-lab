// Code Keypad Component Here
import EyesOnMe from "./EyesOnMe"

function changeHandler() {
    console.log("Entering password...")
   }

function Keypad() {
    return (
        <>
            <input type="password" onChange={changeHandler}/>
        </>
    )
}
export default Keypad
