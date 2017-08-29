import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HotWaterSavingsComponent } from './hot-water-savings/hot-water-savings.component';

const routes: Routes = [
    { path: '', component: HotWaterSavingsComponent },

];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);