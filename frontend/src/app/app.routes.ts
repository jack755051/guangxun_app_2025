import { Routes } from '@angular/router';
import { GxBreadcrumb } from '@sanring/gx-breadcrumb';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
      }
    ]
  }
];
