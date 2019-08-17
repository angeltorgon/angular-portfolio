import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { ResumeComponent } from "./views/resume/resume.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "resume", component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
