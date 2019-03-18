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

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.checkStatus(this.url);
  }

}
