import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "children": [
            {
                "path": "angular\/ng-bootstrap",
                "loadChildren": ".\/pages\/default\/angular\/ng-bootstrap\/ng-bootstrap.module#NgBootstrapModule"
            },
            {
                "path": "angular\/primeng",
                "loadChildren": ".\/pages\/default\/angular\/primeng\/primeng.module#PrimengModule"
            },
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "",
                "redirectTo": "angular/ng-bootstrap",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }