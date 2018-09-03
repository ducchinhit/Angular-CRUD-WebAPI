import { Component, OnInit } from '@angular/core';
import { IVenue } from '../../models/venue.model';
import { VenueService } from '../venue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
  venue: IVenue;
  constructor(private service:VenueService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.getVenue(id);
    });

  }

  getVenue(id: number) {
    this.service.getVenue(id).subscribe(venue => {
      this.venue = venue;
    })
  }

}