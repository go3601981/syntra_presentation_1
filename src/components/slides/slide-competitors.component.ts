import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Network, Settings, Info, Lock } from 'lucide-angular';

@Component({
  selector: 'app-slide-competitors',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-amber-50/30 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-amber-600 uppercase tracking-[0.3em] mb-2">Current Solutions</h2>
          <h1 class="text-2xl md:text-3xl font-bold text-[#1F2937] leading-tight">
            How Other Event Platforms Handle Meetings
          </h1>
          <div class="w-16 h-1 bg-amber-600 mt-3 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div class="space-y-4">
            <div class="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm relative">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm transition-all duration-500 hover:bg-amber-600 hover:text-white">
                  <lucide-icon [name]="Network" [size]="26"></lucide-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-sm">The "Whova" Model</h3>
                  <p class="text-[9px] text-gray-500 uppercase tracking-wider">Top-Down Scheduling</p>
                </div>
              </div>

              <div class="space-y-3">
                @for (step of approach; track step.text) {
                  <div class="flex items-start gap-3 group">
                    <div class="w-4 h-4 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[8px] font-bold text-amber-700 mt-0.5 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                      {{ $index + 1 }}
                    </div>
                    <p class="text-sm text-gray-700 leading-tight">{{ step.text }}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-5 bg-amber-50 rounded-3xl border border-amber-100 relative overflow-hidden">
              <div class="absolute top-0 right-0 p-3 opacity-10">
                <lucide-icon [name]="Settings" [size]="35"></lucide-icon>
              </div>
              
              <h4 class="text-amber-800 font-bold text-[9px] uppercase tracking-widest mb-3 flex items-center gap-2">
                <lucide-icon [name]="Info" [size]="6"></lucide-icon>
                The Core Logic
              </h4>
              
              <p class="text-base text-amber-900 leading-relaxed font-light mb-4">
                In this model, the <span class="font-bold">organizer</span> dictates the structure of the interaction. It assumes that meetings can only happen if they are pre-planned and pre-allocated.
              </p>

              <div class="p-4 bg-white rounded-2xl border border-amber-200 shadow-sm">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 transition-all duration-500 hover:bg-amber-600 hover:text-white">
                    <lucide-icon [name]="Lock" [size]="17"></lucide-icon>
                  </div>
                  <span class="font-bold text-amber-900 text-xs">Rigid Control</span>
                </div>
                <p class="text-[11px] text-amber-800 leading-relaxed italic">
                  "Attendees can only meet within the boxes defined by the event organizer."
                </p>
              </div>
            </div>

            <div class="p-5 bg-[#1F2937] rounded-2xl text-white shadow-xl">
              <h4 class="text-amber-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">Key Takeaway</h4>
              <p class="text-lg font-light leading-snug">
                This is a <span class="text-amber-400 font-bold">top-down scheduling model</span> entirely controlled by the organizer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideCompetitorsComponent {
  readonly Network = Network;
  readonly Settings = Settings;
  readonly Info = Info;
  readonly Lock = Lock;

  readonly approach = [
    { text: 'Organizer creates meeting blocks' },
    { text: 'Time slots are predefined' },
    { text: 'Meeting locations are predefined' },
    { text: 'Attendees book those slots' }
  ];
}
