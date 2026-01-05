import bcrypt from "bcrypt"; 

export function passwordComparator(fromUser:string,fromBD:string){
    return bcrypt.compare(fromUser,fromBD);
}
