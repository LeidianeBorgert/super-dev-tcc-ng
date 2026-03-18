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
<div class="bg-surface-50 dark:bg-surface-950 flex items-center  min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-col items-center m-30">
      <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
          <div class=" mb-8">
            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Selecione um bairro: </div>
              <div class="card flex  mt-10"> 
                <p-select id="bairros" [(ngModel)]="bairroSelecionado" 
                [options]="bairros" optionLabel="bairros" optionValue="bairros" 
                placeholder="Bairro" class="w-full md:w-100" />
            </div>
            <div class="p-10">
              <p-button label="Pesquisar" styleClass="w-full" icon="pi pi-search" routerLink="/"></p-button>
                        </div>
                    </div>
                </div>
         
        
  `,
  styles: ``
})
export class HomeList {
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


