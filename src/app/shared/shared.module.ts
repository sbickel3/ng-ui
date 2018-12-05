import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatTooltipModule, MatMenuModule, MatTabsModule, MatDividerModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatJumbotronModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    RouterModule,
    MatJumbotronModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    ScrollDispatchModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatJumbotronModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollDispatchModule,
    MatTooltipModule,
    NavbarComponent,
    MatTableModule
  ]
})
export class SharedModule { }
