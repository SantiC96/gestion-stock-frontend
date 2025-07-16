import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { ListarProductos } from './componentes/productos/listar-productos/listar-productos';
import { AuthGuard } from './guards/auth-guard';
import { AgregarProductos } from './componentes/productos/agregar-productos/agregar-productos';
import { EditarProductos } from './componentes/productos/editar-productos/editar-productos';
import { AdminGuard } from './guards/admin-guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'productos', component: ListarProductos, canActivate: [AuthGuard]},
    {path: 'productos/agregar-productos', component: AgregarProductos, canActivate: [AdminGuard]},
    {path: 'productos/editar-productos/:id', component: EditarProductos, canActivate: [AdminGuard]}
];
