import ContentDTO from "../Entities/ContentDTO";
import db from "../Configurations/firebaseConfig";

export default class ContentRepository{

    async findByTitle(title: string) : Promise<ContentDTO | null>{
        const snapshot = await db
            .collection('content_streaming')
            .where("title", "==", title)
            .get();

        if (snapshot.empty) return null;

        const data = snapshot.docs[0].data();

        const content = new ContentDTO(data.title, data.description, data.type, data.gender, data.url, data.time);

        return content;
        
    }

    async findById(id: string) : Promise<ContentDTO | null>{
        const snapshot = await db
            .collection('content_streaming')
            .where("id", "==", id)
            .get();

        if (snapshot.empty) return null;

        const data = snapshot.docs[0].data();

        const content = new ContentDTO(data.title, data.description, data.type, data.gender, data.url, data.time);

        return content;
    }

    async findAll(){
        const snapshot = await db
            .collection('content_streaming')
            .get()

        if (snapshot.empty) return null;

        const data = snapshot.docs[0].data();

        const contents = data.map((c) => {
            c = new ContentDTO(c.title, c.description, c.type, c.gender, c.url, c.time);
        })

        return contents;
    }

    async insert(data: ContentDTO) : Promise<ContentDTO>{
        const docRef = db.collection('content_streaming').doc();
        await docRef.set(data);

        return data;

    }

    async update(id: string, data: Partial<ContentDTO>){
        const docRef = await db
            .collection('content_streaming')
            .doc(id)
            .update(data);

        return data;
    }

    async delete(id: string) : Promise<void>{
        await db
            .collection('content_streaming')
            .doc(id)
            .delete();
    }

}