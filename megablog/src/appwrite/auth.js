 import {Client,Account,ID} from "appwrite";
import conf from '../conf.js'
 export class AuthService {
 client=new Client();
 Account;
 constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.Account=new Account(this.client);
 }
 async createAccount({email,password,name}){
    try{
    const userAccount=await this.Account.create(ID.unique(),email,password,name);
    {
        if(userAccount){
           //call another method
           return this.login({email,password}) 

        }else{
        return userAccount;
        }
    }
    } catch(error){
        throw error;
    }
 }
   async login({email,password}){
    try{
        const userAccount=await this.Account.createEmailSession(email,password)
    }catch (error){
        throw error;
    }
   }
   async getCurrentUser(){
    try{
      return await this.Account.get();
    }catch(error){
        console.log("appwrite service :: getCurrentUser::error",error);
        
    }
    return null;
   }
   async logout(){
    try {
       await this.Account.deleteSession(); 
    } catch (error) {
        console.log(" appwrite service :: logout:: error",error);
    }
   }
 }
 const authService =new AuthService();

 export default authService