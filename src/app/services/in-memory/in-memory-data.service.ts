import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const servers = [
      { url: 'http://youtrack.fontys-project.nl', status: '200' },
      { url: 'http://docs.rekeningrijden.fontys-project.nl', status: '200' },
      { url: 'http://simulatie.rekeningrijden.fontys-project.nl', status: '404' },
      { url: 'http://registratie.rekeningrijden.fontys-project.nl', status: '200' },
      { url: 'http://mijn.rekeningrijden.fontys-project.nl', status: '304' },
      { url: 'http://politie.rekeningrijden.fontys-project.nl', status: '500' },
      { url: 'http://overheid.rekeningrijden.fontys-project.nl', status: '200' },
      { url: 'https://gitlab.com/proftaak-s6', status: '200' }
    ];
    return { servers };
  }
}
