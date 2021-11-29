
import LogIn from "./LogIn.js";

export default function AuthForm({ formType }) {
    const forms = {
        LogIn
    };
   
    return formType ? forms[formType]() : null;
}
