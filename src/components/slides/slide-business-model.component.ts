import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-business-model',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-8">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <circle cx="500" cy="500" r="450" stroke="#3EFFC4" stroke-width="0.2" fill="none" class="animate-spin-slow" />
          <circle cx="500" cy="500" r="350" stroke="#3EFFC4" stroke-width="0.2" fill="none" class="animate-spin-slow-reverse" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-7xl">
        <!-- Header -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Economic Architecture
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide12.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Model Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <!-- Revenue Sharing -->
          <div class="group relative p-6 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.2s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="w-32 h-32 mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"/>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#3EFFC4" stroke-width="4" stroke-dasharray="212" stroke-dashoffset="70" class="animate-draw-circle shadow-[0_0_10px_#3EFFC4]"/>
              </svg>
              <mat-icon class="absolute text-white text-4xl group-hover:text-syntra-action-primary transition-colors">pie_chart</mat-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item1_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item1_desc') }}
            </p>
          </div>

          <!-- Territory Model -->
          <div class="group relative p-6 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.4s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="w-32 h-32 mb-8 relative flex items-center justify-center">
              <div class="w-24 h-24 grid grid-cols-2 gap-2">
                <div class="border border-white/20 rounded-lg"></div>
                <div class="bg-syntra-action-primary rounded-lg shadow-[0_0_15px_#3EFFC4] animate-pulse"></div>
                <div class="border border-white/20 rounded-lg"></div>
                <div class="border border-white/20 rounded-lg"></div>
              </div>
              <mat-icon class="absolute text-white/20 text-4xl">public</mat-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item2_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item2_desc') }}
            </p>
          </div>

          <!-- Growth Incentives -->
          <div class="group relative p-6 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.6s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="w-32 h-32 mb-8 relative flex items-center justify-center">
              <div class="flex items-end gap-2 h-16">
                <div class="w-5 h-6 bg-white/10 rounded-t-lg"></div>
                <div class="w-5 h-10 bg-white/10 rounded-t-lg"></div>
                <div class="w-5 h-16 bg-syntra-action-primary rounded-t-lg shadow-[0_0_15px_#3EFFC4] animate-bounce-slow"></div>
              </div>
              <mat-icon class="absolute -top-4 right-4 text-syntra-action-primary text-2xl animate-pulse">trending_up</mat-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item3_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item3_desc') }}
            </p>
          </div>

        </div>

        <!-- Professional Note -->
        <div class="mt-12 pt-8 border-t border-white/10 text-center animate-fade-in" style="animation-delay: 1s">
          <p class="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold">
            {{ t.translate('slide12.subtitle') }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-noise {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      opacity: 0;
      animation: fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes draw-circle {
      from { stroke-dashoffset: 282; }
      to { stroke-dashoffset: 70; }
    }
    .animate-draw-circle {
      animation: draw-circle 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.8s;
    }

    .animate-spin-slow {
      animation: spin 30s linear infinite;
    }
    .animate-spin-slow-reverse {
      animation: spin 40s linear infinite reverse;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 3s ease-in-out infinite;
    }
  `]
})
export class SlideBusinessModelComponent {
  t = inject(TranslationService);
}
