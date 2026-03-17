import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-calendar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Integration</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Calendar Scheduling
          </h1>
          <div class="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-600 leading-relaxed font-light">
              Syntra Advisory bridges the gap between event networking and professional productivity by <span class="text-blue-600 font-semibold">seamlessly syncing</span> with the tools attendees use every day.
            </p>

            <div class="space-y-3">
              @for (capability of capabilities; track capability.title) {
                <div class="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <mat-icon class="text-sm">{{ capability.icon }}</mat-icon>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-0.5 text-sm">{{ capability.title }}</h3>
                    <p class="text-xs text-gray-500 leading-relaxed">{{ capability.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="relative">
            <!-- Calendar Mockup Visual -->
            <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
              <div class="bg-blue-600 p-3 flex items-center justify-between text-white">
                <div class="flex items-center gap-2">
                  <mat-icon class="text-xs">calendar_month</mat-icon>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Schedule Sync</span>
                </div>
                <div class="flex gap-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div class="p-6 space-y-4">
                <div class="space-y-1.5">
                  <div class="h-3 w-1/3 bg-gray-100 rounded"></div>
                  <div class="h-7 w-full bg-blue-50 rounded-lg border border-blue-100 flex items-center px-3">
                    <span class="text-[10px] font-bold text-blue-700 italic">Strategic Partnership Discussion</span>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div class="space-y-1.5">
                    <div class="h-2.5 w-1/2 bg-gray-50 rounded"></div>
                    <div class="h-5 w-full bg-gray-100 rounded"></div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="h-2.5 w-1/2 bg-gray-50 rounded"></div>
                    <div class="h-5 w-full bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div class="pt-3 border-t border-gray-50">
                  <div class="flex items-center justify-between">
                    <span class="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Add to:</span>
                    <div class="flex gap-2">
                      <div class="w-5 h-5 rounded bg-blue-100"></div>
                      <div class="w-5 h-5 rounded bg-red-100"></div>
                      <div class="w-5 h-5 rounded bg-green-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-4 -right-2 bg-gray-900 text-white p-4 rounded-2xl shadow-xl max-w-[160px] animate-bounce-slow">
              <p class="text-[10px] font-light leading-snug">
                Supports meetings that happen <span class="text-blue-400 font-bold italic">during</span> or <span class="text-blue-400 font-bold italic">after</span> the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `]
})
export class SlideCalendarComponent {
  readonly capabilities = [
    { 
      title: 'Generate Calendar Invites', 
      icon: 'mail', 
      description: 'Automatically send .ics files or direct invites to Outlook, Google, and Apple calendars.' 
    },
    { 
      title: 'Select Date and Time', 
      icon: 'event_available', 
      description: 'Intuitive time-slot selection that respects time zones and event schedules.' 
    },
    { 
      title: 'Follow-up Meetings', 
      icon: 'history_edu', 
      description: 'The networking cycle continues with the ability to schedule post-event catch-ups.' 
    }
  ];
}
