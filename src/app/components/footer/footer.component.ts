import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isModalOpen = false;
  modalTitle = '';
  modalContent = '';
  
  socialLinks = [
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' }
  ];

  quickLinks = [
    { name: 'About', route: '/about' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Services', route: '/services' },
    { name: 'Contact', route: '/contact' }
  ];

  services = [
    { name: 'Music Video Production', route: '/services' },
    { name: 'Artist Photography', route: '/services' },
    { name: 'Content Creation', route: '/services' },
    { name: 'Business Photography', route: '/services' }
  ];

  openModal(type: string) {
    this.isModalOpen = true;
    
    switch(type) {
      case 'privacy':
        this.modalTitle = 'Privacy Policy';
        this.modalContent = `
          <h3 class="text-lg font-bold mb-4">Information We Collect</h3>
          <p class="mb-4">We collect information you provide directly to us, such as when you contact us for services, subscribe to our newsletter, or interact with our website.</p>
          
          <h3 class="text-lg font-bold mb-4">How We Use Your Information</h3>
          <p class="mb-4">We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
          
          <h3 class="text-lg font-bold mb-4">Information Sharing</h3>
          <p class="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
          
          <h3 class="text-lg font-bold mb-4">Data Security</h3>
          <p class="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h3 class="text-lg font-bold mb-4">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at hello@zondieffekts.co.za</p>
        `;
        break;
      case 'terms':
        this.modalTitle = 'Terms of Service';
        this.modalContent = `
          <h3 class="text-lg font-bold mb-4">Service Agreement</h3>
          <p class="mb-4">By engaging ZondiEffekts for photography or videography services, you agree to these terms and conditions.</p>
          
          <h3 class="text-lg font-bold mb-4">Payment Terms</h3>
          <p class="mb-4">A 50% deposit is required to secure your booking, with the balance due on completion of services. All prices are in South African Rand (ZAR).</p>
          
          <h3 class="text-lg font-bold mb-4">Cancellation Policy</h3>
          <p class="mb-4">Cancellations made more than 30 days before the event will receive a full refund minus a 10% processing fee. Cancellations within 30 days are non-refundable.</p>
          
          <h3 class="text-lg font-bold mb-4">Copyright and Usage</h3>
          <p class="mb-4">ZondiEffekts retains copyright to all images and videos. Clients receive usage rights for personal or agreed commercial use.</p>
          
          <h3 class="text-lg font-bold mb-4">Liability</h3>
          <p class="mb-4">Our liability is limited to the amount paid for services. We are not responsible for events beyond our control.</p>
          
          <h3 class="text-lg font-bold mb-4">Governing Law</h3>
          <p>These terms are governed by the laws of South Africa.</p>
        `;
        break;
      case 'cookies':
        this.modalTitle = 'Cookie Policy';
        this.modalContent = `
          <h3 class="text-lg font-bold mb-4">What Are Cookies</h3>
          <p class="mb-4">Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>
          
          <h3 class="text-lg font-bold mb-4">How We Use Cookies</h3>
          <p class="mb-4">We use cookies to:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Remember your preferences</li>
            <li>Analyze website traffic and usage</li>
            <li>Improve our website functionality</li>
            <li>Provide personalized content</li>
          </ul>
          
          <h3 class="text-lg font-bold mb-4">Types of Cookies We Use</h3>
          <p class="mb-4"><strong>Essential Cookies:</strong> Necessary for the website to function properly.</p>
          <p class="mb-4"><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
          <p class="mb-4"><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</p>
          
          <h3 class="text-lg font-bold mb-4">Managing Cookies</h3>
          <p class="mb-4">You can control and/or delete cookies as you wish through your browser settings. However, removing cookies may affect the functionality of our website.</p>
          
          <h3 class="text-lg font-bold mb-4">Contact Us</h3>
          <p>For questions about our cookie policy, contact us at hello@zondieffekts.co.za</p>
        `;
        break;
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalTitle = '';
    this.modalContent = '';
  }
}