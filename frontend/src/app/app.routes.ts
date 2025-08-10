import { Routes } from '@angular/router';
import { BreadcrumbItem } from '@sanring/gx-breadcrumb';

const breadcrumb: { [key: string]: BreadcrumbItem } = {
  "home": {
    label: 'Home',
    url: '/home'
  },
  "about": {
    label: 'About',
    url: '/about'
  },
  "products": {
    label: 'Products',
    url: '/products'
  },
  "productDetail": {
    label: 'Product Detail',
    url: '/products/:id'
  }
};

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: breadcrumb['home'].label }  // 加入這行
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { breadcrumb: breadcrumb['about'].label }
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
        data: { breadcrumb: breadcrumb['products'].label }
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
        data: { breadcrumb: breadcrumb['productDetail'].label }
      }
    ]
  }
];
