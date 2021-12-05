import Register from "./Register.js";
import LogIn from "./LogIn.js";

export default function AuthForm({ formType, setFormType }) {
    const forms = {
        LogIn, Register
    };
   
    return formType ? forms[formType](setFormType) : null;
}
