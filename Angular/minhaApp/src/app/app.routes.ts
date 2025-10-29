import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    {
        path: "", 
        component: Home 
    }, 
    {
        path: "cadastro",
        component: Cadastro
    }
];
