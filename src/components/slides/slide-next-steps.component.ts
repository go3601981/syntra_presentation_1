import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Phone, Map, Rocket, Calendar, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-slide-next-steps',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 pt-4 pb-20">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <circle cx="500" cy="500" r="400" stroke="#3EFFC4" stroke-width="0.1" fill="none" class="animate-spin-slow" />
          <path d="M500,100 L500,900 M100,500 L900,500" stroke="#3EFFC4" stroke-width="0.1" fill="none" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-4xl">
        <!-- Header -->
        <div class="text-center mb-4 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-2">
            {{ t.translate('slide15.initiation_label') }}
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide15.title') }}
          </h2>
          <div class="mt-3 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Steps List -->
        <div class="space-y-3">
          @for (step of steps; track step.id) {
            <div 
              class="group relative flex items-center gap-4 p-2.5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-700 hover:bg-white/10 hover:border-syntra-action-primary/50 backdrop-blur-2xl animate-slide-in overflow-hidden"
              [style.animation-delay]="step.id * 0.2 + 's'"
            >
              <!-- Animated Background Glow -->
              <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <!-- Step Number / Icon -->
              <div class="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 shadow-2xl">
                <lucide-icon [name]="step.icon" [size]="28" class="text-gray-500 group-hover:text-syntra-action-primary transition-colors duration-500"></lucide-icon>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <div class="text-[9px] font-mono text-syntra-action-primary mb-1 tracking-widest uppercase">STEP_0{{step.id}}</div>
                <h3 class="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-syntra-action-primary transition-colors tracking-tight uppercase">
                  {{ t.translate('slide15.step' + step.id + '_title') }}
                </h3>
                <p class="text-white/50 text-sm font-light leading-relaxed">
                  {{ t.translate('slide15.step' + step.id + '_desc') }}
                </p>
              </div>

              <!-- Holographic Pulse -->
              <div class="relative flex items-center justify-center w-10 h-10">
                <div class="absolute inset-0 bg-syntra-action-primary/20 rounded-full animate-ping-slow"></div>
                <div class="w-2.5 h-2.5 bg-syntra-action-primary rounded-full shadow-[0_0_10px_#3EFFC4]"></div>
              </div>
            </div>
          }
        </div>

        <!-- Final CTA Button -->
        <div class="mt-6 text-center animate-fade-in" style="animation-delay: 1s">
          <button class="group relative inline-flex items-center gap-4 px-6 py-3 bg-syntra-action-primary text-syntra-bg-dark rounded-full font-black text-lg overflow-hidden shadow-[0_0_50px_rgba(62,255,196,0.3)] transition-all duration-500 hover:scale-105 active:scale-95">
            <!-- Animated Scanline -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            
            <lucide-icon name="calendar" [size]="24"></lucide-icon>
            <span class="tracking-tighter uppercase">{{ t.translate('slide15.cta') }}</span>
            <lucide-icon name="arrow-right" [size]="24" class="group-hover:translate-x-3 transition-transform"></lucide-icon>
          </button>
          
          <div class="mt-4 flex items-center justify-center gap-4">
            <div class="h-px w-12 bg-white/10"></div>
            <p class="text-[9px] text-white/30 font-bold uppercase tracking-[0.5em]">
              {{ t.translate('slide15.availability_label') }}
            </p>
            <div class="h-px w-12 bg-white/10"></div>
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

    @keyframes slide-in {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in {
      opacity: 0;
      animation: slide-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .animate-ping-slow {
      animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .animate-spin-slow {
      animation: spin 40s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class SlideNextStepsComponent {
  t = inject(TranslationService);

  steps = [
    { id: 1, icon: 'phone' },
    { id: 2, icon: 'map' },
    { id: 3, icon: 'rocket' }
  ];
}
