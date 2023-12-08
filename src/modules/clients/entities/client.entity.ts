import { Exclude } from "class-transformer"
import { randomUUID } from "node:crypto"

export class Client {
    readonly id: string
    name: string
    email: string

    @Exclude()
    password: string
    phone: string
    clientId?: string

    constructor(){
        this.id = randomUUID()
    }
}
