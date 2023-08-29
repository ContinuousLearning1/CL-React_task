import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  websiteUrl: string = 'https://www.javatpoint.com/java-tutorial';
  safeWebsiteUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  loadWebsite() {
    if (this.websiteUrl) {
      // Validate the website URL if needed (e.g., using a regex)
      // You can also check for the domain to ensure it's a specific website you want to display.
      // Note: Be cautious when allowing user input to set iframe URLs as it can lead to security vulnerabilities.
      this.safeWebsiteUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl);
    }
  }
}
