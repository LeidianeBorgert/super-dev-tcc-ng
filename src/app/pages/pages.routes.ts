import { Routes } from '@angular/router';
import { HomeList } from './home/list';
import { OcorrenciaList } from './ocorrencias/list';
import { LoginList } from './login/list';
import { CadastroList } from './cadastro/list';



export default [
   
    { path: 'home', component: HomeList },
    { path: 'ocorrencias', component: OcorrenciaList },
    { path: 'login', component: LoginList },
    { path: 'cadastro', component: CadastroList },

] as Routes;
