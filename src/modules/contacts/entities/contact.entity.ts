import { randomUUID } from "node:crypto"

export class Contact {
    readonly id: string
    name: string
    email : string
    phone: string
    client_id?: string

    constructor(){
        this.id = randomUUID()
    }
}
