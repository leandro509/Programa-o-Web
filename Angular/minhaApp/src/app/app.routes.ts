import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastro } from './components/cadastro/cadastro';
import { CadAlbum } from './components/cad-album/cad-album';

export const routes: Routes = [
    {
        path: "", 
        component: Home 
    }, 
    {
        path: "cadastro",
        component: Cadastro
    },  
    {
        path: "cadAlbuns",
        component: CadAlbum
    }
];
