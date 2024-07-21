import { createContext } from "react";

const UserContext = createContext(); //step 1: Creating a context.
//Every context is a providor, i.e it provides us a context variable or store, so context always gives us a providor function. These providors are often used as a wrapper to wrap components in. All the components and their further nested components that are wrapped within the providor will have access to to the context
// there are mainly two ways of creating a providor function.


export default UserContext;
