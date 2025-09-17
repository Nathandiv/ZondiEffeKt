import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  photographyServices = [
    {
      title: 'Artist Photography',
      description: 'Professional photography for musicians and performers',
      features: ['Album cover shoots', 'Promotional photos', 'Behind-the-scenes', 'High-res delivery'],
      price: 'Starting at R8,500',
      icon: '📸'
    },
    {
      title: 'Content Creation',
      description: 'Social media and digital marketing content',
      features: ['Social media packages', 'Story content', 'Reels & TikToks', 'Brand consistency'],
      price: 'Starting at R3,500',
      icon: '📱'
    },
    {
      title: 'Live Event Photography',
      description: 'Concert and performance photography',
      features: ['Multi-camera setup', 'Stage photography', 'Crowd shots', 'Same-day delivery'],
      price: 'Starting at R6,500',
      icon: '🎤'
    },
    {
      title: 'Business Photography',
      description: 'Corporate and commercial photography services',
      features: ['Corporate headshots', 'Brand photography', 'Product shots', 'Commercial rights'],
      price: 'Starting at R4,500',
      icon: '🏢'
    }
  ];

  videographyServices = [
    {
      title: 'Music Video Production',
      description: 'Full-service music video production for artists',
      features: ['Creative direction', 'Multi-camera setup', 'Professional editing', 'Color grading'],
      price: 'Starting at R25,000',
      icon: '🎬'
    },
    {
      title: 'Performance Videos',
      description: 'Live performance and concert videography',
      features: ['Multi-camera coverage', 'Professional audio', 'Live streaming', 'Post-production'],
      price: 'Starting at R15,000',
      icon: '🎵'
    },
    {
      title: 'Brand Videos',
      description: 'Commercial and promotional video content',
      features: ['Brand storytelling', 'Product videos', 'Social media content', 'Professional crew'],
      price: 'Starting at R12,000',
      icon: '📹'
    },
    {
      title: 'Documentary Style',
      description: 'Behind-the-scenes and documentary videography',
      features: ['Story development', 'Interview setup', 'B-roll footage', 'Narrative editing'],
      price: 'Starting at R18,000',
      icon: '🎭'
    }
  ];

  packages = [
    {
      name: 'Emerging Artist Package',
      price: 'R18,999',
      description: 'Perfect for up-and-coming artists and small projects',
      features: [
        'Single music video',
        'Basic photography session',
        'Social media content',
        'Basic editing included',
        '2-day turnaround'
      ],
      popular: false
    },
    {
      name: 'Professional Artist Package',
      price: 'R45,999',
      description: 'Ideal for established artists and record labels',
      features: [
        'Premium music video production',
        'Album cover photography',
        'Content creation package',
        'Advanced color grading',
        'Multi-location shooting',
        'Professional crew'
      ],
      popular: true
    },
    {
      name: 'Celebrity Package',
      price: 'R85,999',
      description: 'Complete visual package for major artists',
      features: [
        'Multiple music videos',
        'Complete brand photography',
        'Documentary-style content',
        'Drone footage included',
        'Creative direction',
        'Extended post-production',
        'Priority scheduling'
      ],
      popular: false
    }
  ];

  isQuoteModalOpen = false;
  isPackageModalOpen = false;
  isConsentModalOpen = false;
  selectedPackage = '';

  openQuoteModal() {
    this.isQuoteModalOpen = true;
  }

  closeQuoteModal() {
    this.isQuoteModalOpen = false;
  }

  openPackageModal(packageName: string) {
    this.selectedPackage = packageName;
    this.isPackageModalOpen = true;
  }

  closePackageModal() {
    this.isPackageModalOpen = false;
    this.selectedPackage = '';
  }

  openConsentModal() {
    this.isConsentModalOpen = true;
  }

  closeConsentModal() {
    this.isConsentModalOpen = false;
  }
}