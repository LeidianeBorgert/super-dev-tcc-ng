import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';



@Component({
  selector: 'app-list',
  imports: [ButtonModule,
    CommonModule,
    SelectModule,
    InputTextModule,
    FormsModule,
    TextareaModule],
  template: `
  
            <div class="card flex justify-center  mt-2"> 
              <label for="campo-nacionalidade">Bairros</label>

                <p-select id="bairro" [(ngModel)]="bairroSelecionado" 
                [options]="bairros" optionLabel="nome" optionValue="nome" 
                placeholder="Selecione o Bairro" class="w-full md:w-100" />
            </div>
 
  `,
  styles: ``
})
export class BairroList {
  bairroSelecionado: string | null = null;

  bairros = [

    { nome: "Água Verde" },
    { nome: "Badenfurt" },
    { nome: "Boa Vista" },
    { nome: "Bom Retiro" },
    { nome: "Centro" },
    { nome: "Da Glória" },
    { nome: "Escola Agrícola" },
    { nome: "Fidélis" },
    { nome: "Fortaleza" },
    { nome: "Fortaleza Alta" },
    { nome: "Garcia" },
    { nome: "Itoupava Central" },
    { nome: "Itoupava Norte" },
    { nome: "Itoupava Seca" },
    { nome: "Itoupavazinha" },
    { nome: "Jardim Blumenau" },
    { nome: "Nova Esperança" },
    { nome: "Passo Manso" },
    { nome: "Ponta Aguda" },
    { nome: "Progresso" },
    { nome: "Ribeirão Fresco" },
    { nome: "Salto Weissbach" },
    { nome: "Salto do Norte" },
    { nome: "Testo Salto" },
    { nome: "Tribess" },
    { nome: "Valparaíso" },
    { nome: "Velha" },
    { nome: "Velha Central" },
    { nome: "Velha Grande" },
    { nome: "Victor Konder" },
    { nome: "Vila Formosa" },
    { nome: "Vila Itoupava" },
    { nome: "Vila Nova" },
    { nome: "Vorstadt" }
  ];



}


