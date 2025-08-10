
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { GxBreadcrumbComponent } from './../../node_modules/@sanring/gx-breadcrumb/src/lib/gx-breadcrumb.component';
import { BreadcrumbItem, GxBreadcrumbComponent } from '@sanring/gx-breadcrumb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GxBreadcrumbComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

    onBreadcrumbNavigate(item: BreadcrumbItem): void {
    console.log('導航到:', item);
    // 這裡可以添加自定義導航邏輯
    // 例如：記錄分析數據、顯示載入狀態等
  }
}
