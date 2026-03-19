import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-slide-partner-role',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-4">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <g stroke="#3EFFC4" stroke-width="0.3" fill="none">
            <circle cx="500" cy="500" r="300" class="animate-pulse" />
            <circle cx="500" cy="500" r="400" class="animate-pulse" style="animation-delay: 1s" />
            <path d="M0,500 L1000,500" />
            <path d="M500,0 L500,1000" />
          </g>
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-4 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            {{ t.translate('slide10.integration_label') }}
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide10.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          <!-- Connection Line (Animated) -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-syntra-action-primary hidden md:block animate-pulse shadow-[0_0_10px_#3EFFC4]"></div>
          
          <!-- Partner Column -->
          <div class="group relative p-6 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-slide-left overflow-hidden">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-6 mb-10">
                <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
                  <lucide-icon name="handshake" [size]="35" class="text-white/20 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
                </div>
                <h3 class="text-3xl font-black text-white uppercase tracking-tight">
                  {{ t.translate('slide10.partner_label') }}
                </h3>
              </div>
              
              <ul class="space-y-6">
                @for (task of partnerTasks; track task.key) {
                  <li class="flex items-start gap-4 group/item">
                    <div class="mt-1.5 w-2 h-2 rounded-full bg-syntra-action-primary shadow-[0_0_8px_#3EFFC4] group-hover/item:scale-150 transition-transform"></div>
                    <span class="text-lg text-white/70 font-light leading-relaxed group-hover/item:text-white transition-colors">
                      {{ t.translate(task.key) }}
                    </span>
                  </li>
                }
              </ul>
            </div>
          </div>

          <!-- Syntra Column -->
          <div class="group relative p-6 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-slide-right overflow-hidden">
            <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <div class="flex items-center gap-6 mb-10">
                <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
                  <lucide-icon name="network" [size]="35" class="text-white/20 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
                </div>
                <h3 class="text-3xl font-black text-white uppercase tracking-tight">
                  {{ t.translate('slide10.syntra_label') }}
                </h3>
              </div>
              
              <ul class="space-y-6">
                @for (task of syntraTasks; track task.key) {
                  <li class="flex items-start gap-4 group/item">
                    <div class="mt-1.5 w-2 h-2 rounded-full bg-syntra-action-primary shadow-[0_0_8px_#3EFFC4] group-hover/item:scale-150 transition-transform"></div>
                    <span class="text-lg text-white/70 font-light leading-relaxed group-hover/item:text-white transition-colors">
                      {{ t.translate(task.key) }}
                    </span>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>

        <!-- Synergy Footer -->
        <div class="mt-8 text-center animate-fade-in group" style="animation-delay: 1.5s">
          <div class="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-syntra-action-primary/30 bg-syntra-action-primary/5 backdrop-blur-md hover:bg-syntra-action-primary/20 transition-all">
            <lucide-icon name="bolt" [size]="11" class="text-white/20 group-hover:text-[#00FF9D] transition-colors animate-pulse"></lucide-icon>
            <span class="text-white font-bold tracking-widest uppercase text-sm">{{ t.translate('slide10.intelligence_label') }}</span>
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

    @keyframes slide-left {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-left {
      opacity: 0;
      animation: slide-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.5s;
    }

    @keyframes slide-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-right {
      opacity: 0;
      animation: slide-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.8s;
    }
  `]
})
export class SlidePartnerRoleComponent {
  t = inject(TranslationService);

  partnerTasks = [
    { key: 'slide10.p_task1' },
    { key: 'slide10.p_task2' },
    { key: 'slide10.p_task3' }
  ];

  syntraTasks = [
    { key: 'slide10.s_task1' },
    { key: 'slide10.s_task2' },
    { key: 'slide10.s_task3' }
  ];
}
