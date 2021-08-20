import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/mail.service';

@Component({
  selector: 'news-mailing',
  templateUrl: './news-mailing.component.html',
  styleUrls: ['./news-mailing.component.scss'],
  providers: [HttpService]
})
export class NewsMailingComponent implements OnInit {

  email:string | undefined;
  answer: string | undefined;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  subscribe(){
    this.httpService.postEmail(this.email).subscribe((params:any) => {this.answer = params; console.log(params)});
  }

}
