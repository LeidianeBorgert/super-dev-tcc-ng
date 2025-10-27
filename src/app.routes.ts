import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { BairroList } from '@/pages/bairro/list';
import { LoginList } from '@/pages/login/list';
import { CadastroList } from '@/pages/cadastro/list';


export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginList },
            { path: 'cadastro', component: CadastroList },
        ]
    },
    { path: '**', redirectTo: '/notfound' },

];
