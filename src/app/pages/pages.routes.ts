import { Routes } from '@angular/router';
import { BairroList } from './bairro/list';
import { OcorrenciaList } from './ocorrencias/list';
import { LoginList } from './login/list';
import { CadastroList } from './cadastro/list';
import { Dashboard } from './dashboard/dashboard';

export default [
    { path: 'dashboard', component: Dashboard },
    { path: 'bairros', component: BairroList },
    { path: 'ocorrencias', component: OcorrenciaList },
] as Routes;
