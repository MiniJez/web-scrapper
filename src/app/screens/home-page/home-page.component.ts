import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScraperboxService } from 'src/app/services/api/scraperbox.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  url = new FormControl('www.google.com');
  btnDisable: boolean = false;
  @ViewChild('codeDiv') codeDiv: ElementRef;

  constructor(private scraperboxService: ScraperboxService) { }

  ngOnInit(): void {
  }

  launchScrape() {
    this.btnDisable = true;
    this.codeDiv.nativeElement.innerHTML = 
    `<div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>`
    this.scraperboxService.scrapeUrl(this.url.value).subscribe(value => {
      this.btnDisable = false;
      this.codeDiv.nativeElement.innerText = value;
    })
  }
}
