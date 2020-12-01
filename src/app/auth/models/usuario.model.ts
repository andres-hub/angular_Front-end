export class Usuario {

    constructor(
        public uid:string,
        public email:string,
        public nombre:string,
        public role?:string,
        public img?:string,
        public google?:boolean,
        public estado?:boolean,
    ){}

}