// UNION AND INTERECTION

// UNION
let a : number | string; //union //or 

a = 10;
a = "mahak"
 
// intersection //and

type User = {
    name : string,
    email: string,
}
type Admin = User & {
    getDetails(user:string):void
}

function abcd(obj : Admin){
    // obj have the properties of the Users and also the getDetails function
    obj.email
    obj.getDetails
    obj.name
}

// DIFFERENCE BETWEEN INTERFACES AND TYPE

// this gives error in the type but in interfaces these were merged 
// type acd = string;
// type acd = number;

// type ka kaam hai type create karna i.e data type ko use karna 
// types ka kaam hai 
//     -types ka merger bana , ya union bana , ya single type bana 


// interface ka kaam hai object ka shape banana 
//interface comes action when we have to create objects