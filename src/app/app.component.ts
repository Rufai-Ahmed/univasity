import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MobileSiderComponent } from './mobile-sider/mobile-sider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    CommonModule,
    HeaderComponent,
    NgOptimizedImage,
    FooterComponent,
    ContentComponent,
    MobileSiderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Univacity';

  selectedFilters: string[] = [];

  onFiltersChanged(filters: string[]) {
    this.selectedFilters = filters;
  }

  isDarkMode: boolean = false;

  toggleDarkMode: (theme: boolean) => void = (theme: boolean) =>
    (this.isDarkMode = theme);

  isShow: boolean = false;
}
