import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let header = new HttpHeaders().set('Content-Type', 'text/html');
header = header.append('Accept', 'text/html')

@Injectable({
  providedIn: 'root'
})

export class ScraperboxService {

  constructor(private http: HttpClient) { }

  scrapeUrl(url: string): Observable<any> {
    return this.http.get(
      `https://scraperbox.com/api/scrape?token=f2cb9aa6f66c91ac6da60f52d9d99527&url=${url}&javascript_enabled=true`,
      {
        headers: header,
        responseType: 'text'
      }
    )
  }
}
