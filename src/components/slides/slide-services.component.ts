import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-services',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-8">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="neuralGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style="stop-color:#3EFFC4;stop-opacity:0.1" />
              <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
            </radialGradient>
          </defs>
          <g stroke="#3EFFC4" stroke-width="0.3" fill="none" class="animate-pulse">
            <circle cx="200" cy="200" r="150" />
            <circle cx="800" cy="200" r="150" />
            <circle cx="200" cy="800" r="150" />
            <circle cx="800" cy="800" r="150" />
            <path d="M200,200 L800,200 L800,800 L200,800 Z" />
            <path d="M200,200 L800,800 M800,200 L200,800" />
          </g>
          <!-- Moving nodes -->
          <circle cx="500" cy="500" r="2" fill="#3EFFC4" class="animate-ping" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Capabilities Manifest
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide6.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (service of services; track service.id) {
            <div 
              class="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-slide-up overflow-hidden"
              [style.animation-delay]="service.id * 0.15 + 's'"
            >
              <!-- Animated Corner Glow -->
              <div class="absolute -top-12 -right-12 w-24 h-24 bg-syntra-action-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div class="relative z-10 flex items-start gap-8">
                <!-- Icon Container -->
                <div class="w-16 h-16 rounded-2xl bg-syntra-bg-dark border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary group-hover:text-syntra-bg-dark transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
                  <mat-icon class="text-4xl">{{ service.icon }}</mat-icon>
                </div>

                <!-- Content -->
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight">
                    {{ t.translate('slide6.service' + service.id + '_title') }}
                  </h3>
                  <p class="text-white/60 leading-relaxed text-lg font-light">
                    {{ t.translate('slide6.service' + service.id + '_desc') }}
                  </p>
                </div>
              </div>

              <!-- Technical Data Overlay (Subtle) -->
              <div class="absolute bottom-4 left-10 text-[8px] font-mono text-white/30 uppercase tracking-widest pointer-events-none">
                Module_ID: 0x{{service.id}}F // Status: Active // Latency: 0.02ms
              </div>

              <!-- Hover Arrow -->
              <div class="absolute bottom-8 right-8 opacity-20 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <mat-icon class="text-syntra-action-primary">arrow_forward</mat-icon>
              </div>
            </div>
          }
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
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-up {
      opacity: 0;
      animation: slide-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `]
})
export class SlideServicesComponent {
  t = inject(TranslationService);

  services = [
    { id: 1, icon: 'analytics', key: 'service1' },
    { id: 2, icon: 'map', key: 'service2' },
    { id: 3, icon: 'code', key: 'service3' },
    { id: 4, icon: 'public', key: 'service4' }
  ];
}
