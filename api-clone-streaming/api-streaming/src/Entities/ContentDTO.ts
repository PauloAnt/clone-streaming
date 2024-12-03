export default class ContentDTO{
    title: string
    description: string
    type: string
    gender: string
    created: Date
    url: string
    time: number

    constructor(
        title: string,
        description: string,
        type: string,
        gender: string,
        url: string,
        time: number){
        
        this.title = title
        this.description = description
        this.type = type
        this.gender = gender
        this.created = new Date()
        this.url = url
        this.time = time
    }

    
}