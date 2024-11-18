import { Routes } from '@angular/router';
import { ProductsComponent } from './machine_test/products/products.component';
import { ModalPopupComponent } from './pages/modal-popup/modal-popup.component';

export const routes: Routes = [
    {
        path:'modal-popup',
        component:ModalPopupComponent
    },
    {
        path:'products',
        component:ProductsComponent
    }

];
