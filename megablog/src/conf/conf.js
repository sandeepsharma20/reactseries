 const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env. VITE_APPWRITE_PROJECT_ID),
    appwriteDataBaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionId:String(import.meta.env. VITE_APPWRITE_COLLECTION_ID),

 }



 export default  conf;
 // ye haamne banaya hai kyuki kabhi kabhi id hamari number me hoti hai or vo load ni ho pati isliye yha vo string me convert ho jati 
 // hai or easily load ho jati hai jaha bhi use ho rhi ho
 //it is not coumplsory