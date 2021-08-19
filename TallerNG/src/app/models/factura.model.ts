import { Item } from "./item.model";

export class Factura{
    constructor(
        public id_factura:number,
        public fecha:Date,
        public items:Item[]
    ){}
}