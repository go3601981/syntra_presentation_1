import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, ArrowLeftRight, Lightbulb, Cpu, Eye } from 'lucide-angular';

@Component({
  selector: 'app-slide-how-it-works',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-8">
      
      <!-- Background Grid & Noise -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: linear-gradient(#3EFFC4 1px, transparent 1px), linear-gradient(90deg, #3EFFC4 1px, transparent 1px); background-size: 80px 80px;"></div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-7xl">
        <!-- Header -->
        <div class="text-center mb-12 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Operational Protocol
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide7.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Flow Diagram Container -->
        <div class="relative px-4">
          <!-- Progression Line Background -->
          <div class="absolute top-12 left-0 w-full h-px bg-white/10 hidden md:block"></div>
          
          <!-- Animated Progression Line (Neural Pulse) -->
          <div class="absolute top-12 left-0 h-px bg-syntra-action-primary hidden md:block animate-line-grow origin-left shadow-[0_0_10px_#3EFFC4]"></div>

          <!-- Steps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            @for (step of steps; track step.id) {
              <div 
                class="flex flex-col items-center text-center group animate-step-reveal"
                [style.animation-delay]="step.id * 0.4 + 's'"
              >
                <!-- Step Circle (Holographic) -->
                <div class="relative z-20 w-24 h-24 rounded-full bg-syntra-bg-dark border border-white/20 flex items-center justify-center mb-10 transition-all duration-700 group-hover:border-syntra-action-primary group-hover:shadow-[0_0_30px_rgba(62,255,196,0.3)]">
                  <!-- Pulse Ring -->
                  <div class="absolute inset-0 rounded-full border border-syntra-action-primary/50 animate-ping opacity-0 group-hover:opacity-100"></div>
                  
                  <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center transition-all duration-700">
                    <lucide-icon [name]="step.icon" [size]="44" class="text-gray-500 group-hover:text-syntra-action-primary transition-colors duration-500"></lucide-icon>
                  </div>
                  
                  <!-- Step Number Badge (Technical) -->
                  <div class="absolute -top-3 -right-3 w-10 h-10 rounded-lg bg-syntra-bg-dark text-syntra-action-primary text-xs font-mono font-bold flex items-center justify-center border border-white/20 shadow-xl">
                    0{{ step.id }}
                  </div>
                </div>

                <!-- Content -->
                <div class="px-4">
                  <h3 class="text-xl font-bold text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight">
                    {{ t.translate('slide7.step' + step.id + '_title') }}
                  </h3>
                  <div class="h-px w-8 bg-white/10 mx-auto mb-4 group-hover:w-16 group-hover:bg-syntra-action-primary transition-all duration-500"></div>
                  <p class="text-sm text-white/40 leading-relaxed max-w-[220px] mx-auto opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 font-light">
                    {{ t.translate('slide7.step' + step.id + '_desc') }}
                  </p>
                </div>
              </div>
            }
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

    @keyframes line-grow {
      0% { transform: scaleX(0); opacity: 0; }
      10% { opacity: 1; }
      100% { transform: scaleX(1); opacity: 1; }
    }
    .animate-line-grow {
      animation: line-grow 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.8s;
    }

    @keyframes step-reveal {
      from { opacity: 0; transform: scale(0.8) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-step-reveal {
      opacity: 0;
      animation: step-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `]
})
export class SlideHowItWorksComponent {
  t = inject(TranslationService);

  steps = [
    { id: 1, icon: 'search', key: 'audit' },
    { id: 2, icon: 'arrow-left-right', key: 'gap' },
    { id: 3, icon: 'lightbulb', key: 'strategy' },
    { id: 4, icon: 'cpu', key: 'execution' },
    { id: 5, icon: 'eye', key: 'monitoring' }
  ];
}
