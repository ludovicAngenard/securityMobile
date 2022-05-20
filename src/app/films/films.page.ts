import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  popularMovies = [];
  constructor(private http: HttpClient) {
    this.readAPI("https://api.themoviedb.org/3/discover/movie?api_key=a1c4d0fd0aa2393f51c95704cb09f8fa")
      .subscribe((data) => {
        console.log(data);
        data['results'].forEach(element => {
          this.popularMovies.push(element);
        });
      })
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

  ngOnInit() {
  }

}
