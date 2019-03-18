import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit {

  @Input() appName: string;
  @Input() url: string;

  statusMessage: string;
  statusClass: string;

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.checkStatus(this.url).subscribe(res => {
      this.resolveStatus(res[0].status);
    });
  }

  resolveStatus(status: number) {
    if (status < 199) {
      this.statusMessage = `Informational: ${status}`;
      this.statusClass = 'informational';
    } else if (status < 299) {
      this.statusMessage = `Success: ${status}`;
      this.statusClass = 'success';
    } else if (status < 399) {
      this.statusMessage = `Redirection: ${status}`;
      this.statusClass = 'redirection';
    } else if (status < 499) {
      this.statusMessage = `Client Error: ${status}`;
      this.statusClass = 'client-error';
    } else {
      this.statusMessage = `Server Error: ${status}`;
      this.statusClass = 'server-error';
    }
  }

}
