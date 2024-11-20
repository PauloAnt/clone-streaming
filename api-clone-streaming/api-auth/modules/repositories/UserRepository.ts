import db from '../configurations/firebaseConfig.js';
import UserDTO from '../entities/UserDTO';

export default class UserRepository{
    
    async findByEmail(email: string) : Promise<UserDTO | null>{
        const snapshot = await db
        .collection('user_streaming')
        .where("email", "==", email)
        .get();
        
        if (snapshot.empty) return null;

        return snapshot.docs[0].data() as UserDTO;
    }

    async findById(id: string) : Promise<UserDTO | null>{
        const snapshot = await db
        .collection('user_streaming')
        .where("id", "==", id)
        .get();
        
        if (snapshot.empty) return null;

        return snapshot.docs[0].data() as UserDTO;
    }

    async register(data: UserDTO) : Promise<UserDTO>{
        const docRef = db.collection('user_streaming').doc();
        await docRef.set(data);

        return data;
    }

}