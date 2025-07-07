 import conf from "../conf/conf";
 import {Client,Account,ID} from "appwrite";
 export   class AuthService {
    client =new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.endpoint)
        .setProject(conf.appwriteProjectId)
    }
    async createAccount({email,password,name}){
        try{
await this.account.create( ID.unique(),email,password,name);
if(userAccount){
   return this.login({email,password});
}else {
     return userAccount;
}
        }catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);

        }catch (error){
            throw error;
        }
    }
    async getCurrentUSer(){
        try {
return await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUSer::error",error);
        }
        return null;
    }
    async logout(){
        try{
await this.account.deleteSessions('current')
        }catch(error){
            console.log("")
        }
    }

 }
const AuthService=new AuthService();
 export default AuthService