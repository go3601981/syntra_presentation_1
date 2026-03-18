import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-slide-why-syntra',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-8">
      
      <!-- Subtle Motion Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-full opacity-10">
          <div class="absolute w-[800px] h-[800px] bg-syntra-action-primary rounded-full blur-[150px] animate-float-slow -top-1/2 -left-1/4"></div>
          <div class="absolute w-[600px] h-[600px] bg-syntra-action-primary rounded-full blur-[120px] animate-float-slow-reverse bottom-0 right-0 translate-y-1/2 translate-x-1/4"></div>
        </div>
        <!-- Grid Overlay -->
        <div class="absolute inset-0 opacity-[0.03]" 
             style="background-image: linear-gradient(#00FF9D 1px, transparent 1px), linear-gradient(90deg, #00FF9D 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="mb-8 animate-fade-in">
          <h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(62,255,196,0.5)] uppercase">
            {{ t.translate('slide14.title') }}
          </h2>
          <div class="h-1 w-32 bg-syntra-action-primary rounded-full shadow-[0_0_10px_#3EFFC4]"></div>
        </div>

        <!-- Vision Points -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <!-- Point 1 -->
          <div class="group animate-slide-up" style="animation-delay: 0.3s">
            <div class="mb-8 flex items-center gap-4">
              <span class="text-5xl font-black text-syntra-action-primary/20 group-hover:text-syntra-action-primary transition-colors duration-500">01</span>
              <div class="h-px flex-1 bg-white/10 group-hover:bg-syntra-action-primary/30 transition-colors"></div>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              {{ t.translate('slide14.point1_title') }}
            </h3>
            <p class="text-white/60 text-lg leading-relaxed">
              {{ t.translate('slide14.point1_desc') }}
            </p>
          </div>

          <!-- Point 2 -->
          <div class="group animate-slide-up" style="animation-delay: 0.6s">
            <div class="mb-8 flex items-center gap-4">
              <span class="text-5xl font-black text-syntra-action-primary/20 group-hover:text-syntra-action-primary transition-colors duration-500">02</span>
              <div class="h-px flex-1 bg-white/10 group-hover:bg-syntra-action-primary/30 transition-colors"></div>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              {{ t.translate('slide14.point2_title') }}
            </h3>
            <p class="text-white/60 text-lg leading-relaxed">
              {{ t.translate('slide14.point2_desc') }}
            </p>
          </div>

          <!-- Point 3 -->
          <div class="group animate-slide-up" style="animation-delay: 0.9s">
            <div class="mb-8 flex items-center gap-4">
              <span class="text-5xl font-black text-syntra-action-primary/20 group-hover:text-syntra-action-primary transition-colors duration-500">03</span>
              <div class="h-px flex-1 bg-white/10 group-hover:bg-syntra-action-primary/30 transition-colors"></div>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              {{ t.translate('slide14.point3_title') }}
            </h3>
            <p class="text-white/60 text-lg leading-relaxed">
              {{ t.translate('slide14.point3_desc') }}
            </p>
          </div>

        </div>

        <!-- Vision Footer -->
        <div class="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in group" style="animation-delay: 1.5s">
          <div class="flex items-center gap-6">
            <div class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow hover:bg-syntra-action-primary transition-all">
              <lucide-icon name="sparkles" [size]="35" class="text-white/20 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
            </div>
            <span class="text-white/40 uppercase tracking-[0.3em] font-medium text-sm">The Future is Synthetic</span>
          </div>
          <div class="text-white font-bold text-4xl md:text-6xl tracking-tight drop-shadow-[0_0_15px_rgba(62,255,196,0.3)] select-none uppercase">
            SYNTRA ADVISORY
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }

    @keyframes slide-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-up {
      opacity: 0;
      animation: slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(50px, 30px); }
    }
    .animate-float-slow {
      animation: float-slow 15s ease-in-out infinite;
    }

    @keyframes float-slow-reverse {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-40px, -20px); }
    }
    .animate-float-slow-reverse {
      animation: float-slow-reverse 18s ease-in-out infinite;
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 10s linear infinite;
    }
  `]
})
export class SlideWhySyntraComponent {
  t = inject(TranslationService);
}
