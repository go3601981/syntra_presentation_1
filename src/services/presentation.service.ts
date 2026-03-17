import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private _currentSlideIndex = signal(0);
  
  readonly totalSlides = 16;
  
  readonly currentSlideIndex = this._currentSlideIndex.asReadonly();
  
  readonly isFirstSlide = computed(() => this._currentSlideIndex() === 0);
  readonly isLastSlide = computed(() => this._currentSlideIndex() === this.totalSlides - 1);
  readonly progress = computed(() => ((this._currentSlideIndex() + 1) / this.totalSlides) * 100);

  // Define which slides have a dark background
  readonly isCurrentSlideDark = computed(() => {
    // Indices of slides with dark backgrounds (0-indexed)
    // 0: Title, 1: Shift, 2: Brands, 3: Opportunity, 5: Services, 6: How it works, 8: Market, 9: Partner Role, 
    // 10: What they get, 11: Business Model, 12: Growth Path, 13: Why Syntra, 14: Next Steps, 15: Contact
    const darkSlides = [0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15]; 
    return darkSlides.includes(this._currentSlideIndex());
  });

  nextSlide() {
    if (!this.isLastSlide()) {
      this._currentSlideIndex.update(i => i + 1);
    }
  }

  prevSlide() {
    if (!this.isFirstSlide()) {
      this._currentSlideIndex.update(i => i - 1);
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalSlides) {
      this._currentSlideIndex.set(index);
    }
  }
}