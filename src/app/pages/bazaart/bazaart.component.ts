import { Component, OnInit } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-bazaart',
  templateUrl: './bazaart.component.html',
  styleUrls: ['./bazaart.component.scss'],
})
export class BazaartComponent implements OnInit {
  mainFindings: string[] = [
    'Searching for creative services is time-consuming because the users do not use a dedicated platform.',
    'When searching for creative work they ask friends and known ones for recommendations.',
    'The interviewed artists used or tried to use online dedicated platforms for promoting their work, but found it mostly inefficient.',
    'The majority of artists clients come through recommendations from former clients.',
    'The buyers need information like portfolio, price and reviews when selecting an artist.',
    'If in need of multiple artists for a specific event it becomes difficult to keep track of all communications and offers.',
    'Both users need to have a sense of security and trust regarding the other part involved.',
    'Artists expressed their expectation that an online dedicated platform should help them be visible to clients based on their work quality and their work experience.',
    'Creative services that are rated highest in demand: photography, videography, graphic design, painting, and music.',
    'The majority of users are not very satisfied with the current online options for promoting their work.',
  ];

  mainFeatures: string[] = [
    'client profile',
    'explore the home page',
    'manage bookings and events',
    'create a new event',
    'add multiple artists categories to the event',
    'explore artists categories',
    'explore artist profile',
    'add multiple artists to the event',
    'inspect quotations requests status',
    'accept quotations requests',
    'payment to confirm the booking',
  ];

  formModal: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('imageZoomModal')
    );
  }

  openFormModal(imgSrc: string) {
    const modal = document.getElementById('imageZoomModal');
    const modalImgElement = modal?.querySelector('#modal-img');
    if (modalImgElement) {
      // @ts-ignore
      modalImgElement.src = imgSrc;
    }
    this.formModal.show();
  }
}
