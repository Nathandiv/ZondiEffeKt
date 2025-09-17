import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {
  isQuoteModalOpen = false;
  isConsentModalOpen = false;

  openModal(modalId: string) {
    if (modalId === 'quote') {
      this.isQuoteModalOpen = true;
    } else if (modalId === 'consent') {
      this.isConsentModalOpen = true;
    }
  }

  closeModal(modalId: string) {
    if (modalId === 'quote') {
      this.isQuoteModalOpen = false;
    } else if (modalId === 'consent') {
      this.isConsentModalOpen = false;
    }
  }

  openConsentModal() {
    this.isConsentModalOpen = true;
  }

  closeConsentModal() {
    this.isConsentModalOpen = false;
  }
}