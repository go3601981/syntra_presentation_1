import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-personas',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">The Human Element</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Who Are We Building For?
          </h1>
          <div class="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (persona of personas; track persona.name) {
            <div class="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <mat-icon class="text-2xl">{{ persona.icon }}</mat-icon>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ persona.name }}</h3>
              <p class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{{ persona.role }}</p>
              
              <div class="space-y-3">
                <div class="p-3 bg-gray-50 rounded-xl">
                  <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Primary Need</p>
                  <p class="text-xs text-gray-700 leading-relaxed">{{ persona.need }}</p>
                </div>
                <div class="p-3 bg-blue-50/50 rounded-xl">
                  <p class="text-[10px] font-bold text-blue-600 uppercase mb-1">Platform Value</p>
                  <p class="text-xs text-gray-700 leading-relaxed italic">"{{ persona.quote }}"</p>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="mt-10 p-5 bg-slate-900 rounded-2xl text-white flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <mat-icon class="text-blue-400 text-sm">psychology</mat-icon>
          </div>
          <p class="text-sm font-light leading-relaxed">
            By understanding these distinct needs, we ensure the platform is <span class="text-blue-400 font-semibold">flexible enough</span> for power users while remaining <span class="text-blue-400 font-semibold">approachable</span> for spontaneous networkers.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 28px; width: 28px; height: 28px; }
  `]
})
export class SlidePersonasComponent {
  readonly personas = [
    { 
      name: 'The Power Networker', 
      role: 'Sales Executive',
      icon: 'trending_up',
      need: 'Needs to schedule 20+ meetings and requires a clean calendar view to avoid overlaps.',
      quote: 'I need to maximize every minute of this event with high-value leads.'
    },
    { 
      name: 'The Spontaneous Attendee', 
      role: 'Software Engineer',
      icon: 'bolt',
      need: 'Needs low-friction ways to meet people they just chatted with or saw in a session.',
      quote: 'That session was great! Let\'s grab coffee and talk about it now.'
    },
    { 
      name: 'The Strategic Exhibitor', 
      role: 'Booth Manager',
      icon: 'storefront',
      need: 'Needs to invite high-value leads discovered via the Participant List to their booth.',
      quote: 'I want to invite the right people to our booth for a private demo.'
    }
  ];
}
