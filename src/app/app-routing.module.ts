import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { RenditionsComponent } from './renditions/renditions.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'renditions', component: RenditionsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'contact', component: ContactComponent },
  { path : 'notes/:object', component: NotesComponent },
  { path: '**', pathMatch: 'full', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
