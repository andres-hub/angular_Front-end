export class Entidad {

    constructor(
        public _id: string,
        public moduloId: string,
        public nombre:string,
        public url: string,
        public acciones:string[]
    ){}
}