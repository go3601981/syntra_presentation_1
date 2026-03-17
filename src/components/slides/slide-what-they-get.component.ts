import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-what-they-get',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-12">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#3EFFC4;stop-opacity:0" />
              <stop offset="50%" style="stop-color:#3EFFC4;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#3EFFC4;stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M0,200 L1000,200" stroke="url(#lineGrad)" stroke-width="1" class="animate-pulse" />
          <path d="M0,400 L1000,400" stroke="url(#lineGrad)" stroke-width="1" class="animate-pulse" style="animation-delay: 0.5s" />
          <path d="M0,600 L1000,600" stroke="url(#lineGrad)" stroke-width="1" class="animate-pulse" style="animation-delay: 1s" />
          <path d="M0,800 L1000,800" stroke="url(#lineGrad)" stroke-width="1" class="animate-pulse" style="animation-delay: 1.5s" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Value Proposition
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide11.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (benefit of benefits; track benefit.id) {
            <div 
              class="group relative p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-benefit-reveal overflow-hidden"
              [style.animation-delay]="benefit.id * 0.2 + 's'"
            >
              <!-- Animated Background Glow -->
              <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-syntra-action-primary/20 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div class="relative z-10 flex items-start gap-8">
                <!-- Icon Container -->
                <div class="w-16 h-16 shrink-0 rounded-2xl bg-syntra-bg-dark border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary group-hover:text-syntra-bg-dark transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
                  <mat-icon class="text-4xl">{{ benefit.icon }}</mat-icon>
                </div>

                <!-- Content -->
                <div>
                  <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
                    {{ t.translate('slide11.benefit' + benefit.id + '_title') }}
                  </h3>
                  <p class="text-white/60 leading-relaxed text-lg font-light">
                    {{ t.translate('slide11.benefit' + benefit.id + '_desc') }}
                  </p>
                </div>
              </div>

              <!-- Technical ID -->
              <div class="absolute top-8 right-8 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                VAL_0{{benefit.id}}
              </div>
            </div>
          }
        </div>

        <!-- Bottom Callout -->
        <div class="mt-16 text-center animate-fade-in" style="animation-delay: 1.5s">
          <div class="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-syntra-action-primary/30 bg-syntra-action-primary/5 backdrop-blur-md">
            <mat-icon class="text-syntra-action-primary animate-pulse">verified</mat-icon>
            <span class="text-white font-bold tracking-widest uppercase text-sm">Full Partner Enablement Package</span>
          </div>
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

    @keyframes benefit-reveal {
      from { opacity: 0; transform: scale(0.9) translateY(40px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-benefit-reveal {
      opacity: 0;
      animation: benefit-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `]
})
export class SlideWhatTheyGetComponent {
  t = inject(TranslationService);

  benefits = [
    { id: 1, icon: 'api' },
    { id: 2, icon: 'branding_watermark' },
    { id: 3, icon: 'architecture' },
    { id: 4, icon: 'payments' }
  ];
}
