import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-closing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-black px-6 py-12">
      
      <!-- Cinematic Glow Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-syntra-action-primary/10 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      <div class="relative z-10 w-full max-w-5xl text-center">
        <!-- Final Statement -->
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight animate-glow-fade">
          {{ t.translate('slide16.text') }}
        </h2>

        <!-- Final Logo Reveal -->
        <div class="mt-24 animate-fade-in" style="animation-delay: 2s">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-1 w-16 bg-syntra-action-primary rounded-full mb-8"></div>
            <span class="text-white/20 uppercase tracking-[0.5em] font-black text-4xl md:text-6xl select-none">
              SYNTRA
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes pulse-slow {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
      50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }

    @keyframes glow-fade {
      0% { opacity: 0; transform: scale(0.95); text-shadow: 0 0 0px rgba(0,255,157,0); }
      50% { opacity: 1; transform: scale(1); text-shadow: 0 0 30px rgba(0,255,157,0.3); }
      100% { opacity: 1; transform: scale(1); text-shadow: 0 0 10px rgba(0,255,157,0.1); }
    }
    .animate-glow-fade {
      animation: glow-fade 3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      opacity: 0;
      animation: fade-in 2s ease-out forwards;
    }
  `]
})
export class SlideClosingComponent {
  t = inject(TranslationService);
}
