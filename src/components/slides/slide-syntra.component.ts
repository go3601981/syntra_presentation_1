import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-syntra',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-page px-6 py-12">
      
      <!-- Subtle Particle Motion Background -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        @for (p of particles; track $index) {
          <div 
            class="absolute rounded-full bg-syntra-action-primary/10 blur-[1px] animate-float"
            [style.width.px]="p.size"
            [style.height.px]="p.size"
            [style.top.%]="p.top"
            [style.left.%]="p.left"
            [style.animation-duration.s]="p.duration"
            [style.animation-delay.s]="p.delay"
          ></div>
        }
      </div>

      <!-- Main Content Container -->
      <div class="relative z-10 w-full max-w-4xl text-center">
        
        <!-- Minimal Label -->
        <div class="mb-8 animate-fade-in-up">
          <span class="text-xs font-bold text-syntra-text-muted uppercase tracking-[0.3em] border-b border-syntra-border-default pb-2">
            {{ t.translate('slide5.label') }}
          </span>
        </div>

        <!-- Central Premium Statement -->
        <div class="relative group">
          <!-- Glow Effect Behind Text -->
          <div class="absolute inset-0 bg-syntra-action-primary/5 blur-[80px] rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-light text-syntra-text-primary leading-tight tracking-tight animate-reveal">
            {{ t.translate('slide5.title') }}
          </h1>
        </div>

        <!-- Subtle Decorative Line -->
        <div class="mt-16 w-24 h-px bg-gradient-to-r from-transparent via-syntra-action-primary to-transparent mx-auto animate-expand"></div>
      </div>

      <!-- Corner Accents -->
      <div class="absolute top-12 left-12 w-8 h-8 border-t border-l border-syntra-border-default opacity-30"></div>
      <div class="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-syntra-border-default opacity-30"></div>
    </div>
  `,
  styles: [`
    @keyframes float {
      0%, 100% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(20px, -40px); opacity: 0.5; }
    }
    .animate-float {
      animation: float linear infinite alternate;
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes reveal {
      0% { opacity: 0; filter: blur(10px); transform: scale(0.98); }
      100% { opacity: 1; filter: blur(0); transform: scale(1); }
    }
    .animate-reveal {
      animation: reveal 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes expand {
      from { width: 0; opacity: 0; }
      to { width: 6rem; opacity: 1; }
    }
    .animate-expand {
      animation: expand 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
      opacity: 0;
    }
  `]
})
export class SlideSyntraComponent {
  t = inject(TranslationService);

  // Generate random particles for the background
  particles = Array.from({ length: 20 }).map(() => ({
    size: Math.random() * 4 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * -20
  }));
}
