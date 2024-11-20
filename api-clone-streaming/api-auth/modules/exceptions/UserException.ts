export default class UserException extends Error{
    public readonly statusCode: number
    constructor(statusCode: number, message){
        super(message)
        this.statusCode = statusCode
    }
}