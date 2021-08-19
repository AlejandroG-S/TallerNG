import { Component, OnInit } from '@angular/core';
import { Factura } from '../models/factura.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  title = "Factura"

  facturas : Factura[] = []
  id_factura : string = ""

  items : Item[] = []
  id_fac_i : string = ""
  nombre_item : string = ""
  precio : number = 0

  NoHay = true 
  SiItem = false

  agregarFactura(){
    let factura = new Factura(this.facturas.length + 1, new Date(), []) 
    this.facturas.push(factura) 
    this.NoHay = false
  }

  agregarItem(){
    this.SiItem = true
  }

  guardarItem(id:number){
    let item = new Item(id, this.nombre_item, this.precio)
    this.facturas[id].items.push(item)
    this.SiItem = false
  }


}
