import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'topics',
    loadChildren: () => import('../routing/topics/topics.module').then(m => m.TopicsModule),
  },
  {
    path: 'cards',
    loadChildren: () => import('../routing/cards/cards.module').then(m => m.CardsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
