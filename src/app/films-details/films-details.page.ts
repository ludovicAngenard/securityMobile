import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.page.html',
  styleUrls: ['./films-details.page.scss'],
})
export class FilmsDetailsPage implements OnInit {
  public filmsDetails: string;
  public movie = {};
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.filmsDetails = this.activatedRoute.snapshot.paramMap.get('id');
    this.readAPI(`https://api.themoviedb.org/3/movie/${this.filmsDetails}?api_key=a1c4d0fd0aa2393f51c95704cb09f8fa`)
      .subscribe((data) => {
        this.movie = data;
      })
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

  ngOnInit() {
  }

}
