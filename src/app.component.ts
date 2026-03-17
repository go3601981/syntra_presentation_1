import { Component, inject, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideTitleComponent } from './components/slides/slide-title.component';
import { SlideShiftComponent } from './components/slides/slide-shift.component';
import { SlideProblemComponent } from './components/slides/slide-problem.component';
import { SlideOpportunityComponent } from './components/slides/slide-opportunity.component';
import { SlideSyntraComponent } from './components/slides/slide-syntra.component';
import { SlideServicesComponent } from './components/slides/slide-services.component';
import { SlideHowItWorksComponent } from './components/slides/slide-how-it-works.component';
import { SlideWhyNowComponent } from './components/slides/slide-why-now.component';
import { SlideMarketComponent } from './components/slides/slide-market.component';
import { SlidePartnerRoleComponent } from './components/slides/slide-partner-role.component';
import { SlideWhatTheyGetComponent } from './components/slides/slide-what-they-get.component';
import { SlideBusinessModelComponent } from './components/slides/slide-business-model.component';
import { SlideGrowthPathComponent } from './components/slides/slide-growth-path.component';
import { SlideWhySyntraComponent } from './components/slides/slide-why-syntra.component';
import { SlideNextStepsComponent } from './components/slides/slide-next-steps.component';
import { SlideClosingComponent } from './components/slides/slide-closing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideTitleComponent,
    SlideShiftComponent,
    SlideProblemComponent,
    SlideOpportunityComponent,
    SlideSyntraComponent,
    SlideServicesComponent,
    SlideHowItWorksComponent,
    SlideWhyNowComponent,
    SlideMarketComponent,
    SlidePartnerRoleComponent,
    SlideWhatTheyGetComponent,
    SlideBusinessModelComponent,
    SlideGrowthPathComponent,
    SlideWhySyntraComponent,
    SlideNextStepsComponent,
    SlideClosingComponent
  ],
  template: `
    <app-logo />

    <main 
      #mainContainer 
      tabindex="0" 
      class="w-full h-screen bg-syntra-bg-page overflow-y-auto relative pb-24 lg:pb-20 outline-none"
    >
      
      @switch (presentation.currentSlideIndex()) {
        @case (0) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-title />
          </div>
        }
        @case (1) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-shift />
          </div>
        }
        @case (2) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-problem />
          </div>
        }
        @case (3) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-opportunity />
          </div>
        }
        @case (4) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-syntra />
          </div>
        }
        @case (5) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-services />
          </div>
        }
        @case (6) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-how-it-works />
          </div>
        }
        @case (7) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-why-now />
          </div>
        }
        @case (8) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-market />
          </div>
        }
        @case (9) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-partner-role />
          </div>
        }
        @case (10) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-what-they-get />
          </div>
        }
        @case (11) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-business-model />
          </div>
        }
        @case (12) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-growth-path />
          </div>
        }
        @case (13) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-why-syntra />
          </div>
        }
        @case (14) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-next-steps />
          </div>
        }
        @case (15) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-closing />
          </div>
        }
        @default {
          <div class="w-full h-full flex items-center justify-center bg-syntra-bg-page">
            <div class="text-center">
              <h1 class="text-4xl font-bold text-syntra-text-primary mb-4">Slide {{ presentation.currentSlideIndex() + 1 }}</h1>
              <p class="text-syntra-text-secondary italic">Coming soon: New content for Syntra Advisory</p>
            </div>
          </div>
        }
      }

    </main>

    <app-nav-bar />
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent implements AfterViewInit {
  presentation = inject(PresentationService);
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Focus the main container to capture keyboard events immediately
    this.mainContainer.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      this.presentation.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.presentation.prevSlide();
    }
  }
}