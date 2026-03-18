import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageSquare, Accessibility, Globe, MonitorSmartphone, Quote } from 'lucide-angular';

@Component({
  selector: 'app-slide-advantages',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-full h-full bg-slate-50/30 -z-10"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-slate-600 uppercase tracking-[0.3em] mb-4">The Competitive Edge</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            How Syntra Advisory Improves the Networking Experience
          </h1>
          <div class="w-20 h-1 bg-slate-900 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          @for (advantage of advantages; track advantage.title) {
            <div class="group flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 hover:border-emerald-500/50">
              <div class="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-emerald-600">
                <lucide-icon [name]="advantage.icon" [size]="35"></lucide-icon>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-base mb-0.5 group-hover:text-emerald-600 transition-colors">{{ advantage.title }}</h3>
                <p class="text-slate-500 leading-relaxed text-xs">{{ advantage.description }}</p>
              </div>
            </div>
          }
        </div>

        <div class="p-8 bg-white rounded-[32px] border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10">
            <lucide-icon [name]="Quote" [size]="35" class="text-slate-900"></lucide-icon>
          </div>
          
          <div class="relative z-10">
            <h4 class="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span class="w-6 h-px bg-slate-300"></span>
              The Conclusion
            </h4>
            <p class="text-2xl md:text-3xl font-bold text-slate-900 leading-tight max-w-3xl">
              Syntra Advisory enables <span class="text-emerald-600 italic">natural networking</span> rather than forcing predefined meeting slots.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideAdvantagesComponent {
  readonly Quote = Quote;

  readonly advantages = [
    { 
      title: 'Real Interactions', 
      icon: MessageSquare, 
      description: 'Meetings start from real interactions such as the participant list and chat.' 
    },
    { 
      title: 'Attendee Control', 
      icon: Accessibility, 
      description: 'Attendees control their own networking and connections.' 
    },
    { 
      title: 'Anywhere, Anytime', 
      icon: Globe, 
      description: 'Meetings can happen anywhere and anytime, not restricted to specific slots.' 
    },
    { 
      title: 'Hybrid Support', 
      icon: MonitorSmartphone, 
      description: 'Supports both in-person and virtual meetings seamlessly.' 
    }
  ];
}
