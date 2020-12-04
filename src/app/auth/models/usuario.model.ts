import { formatCurrency } from '@angular/common'
import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

export class Usuario {

    constructor(
        public uid:string,
        public email:string,
        public nombre:string,
        public role?:string,
        public img?:string,
        public google?:boolean
    ){}

    get imagenUrl(){
        if( this.img){
            if(this.img.includes('https:'))
                return this.img;
            return `${base_url}/upload/usuarios/${this.img}`;
        }else{
            return `${base_url}/upload/usuarios/no-image.png`;
        }
    }

}