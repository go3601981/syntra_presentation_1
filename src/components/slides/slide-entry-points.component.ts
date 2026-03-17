import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-entry-points',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">The Ecosystem</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Where Meetings Start in Syntra Advisory
          </h1>
          <div class="w-20 h-1 bg-indigo-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div class="space-y-6">
            <p class="text-lg text-gray-600 leading-relaxed font-light">
              We create multiple <span class="text-indigo-600 font-semibold">Discovery Channels</span>, ranging from passive browsing to proactive, intelligent suggestions.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              @for (point of entryPoints; track point.title) {
                <div class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all">
                  <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <mat-icon class="text-sm">{{ point.icon }}</mat-icon>
                  </div>
                  <span class="font-bold text-gray-900 text-sm">{{ point.title }}</span>
                </div>
              }
            </div>
          </div>

          <div class="space-y-8">
            <!-- Proactive Prompt Example -->
            <div class="p-6 bg-indigo-50 rounded-[32px] border-2 border-indigo-200 shadow-xl relative overflow-hidden">
              <div class="absolute top-0 right-0 p-4">
                <mat-icon class="text-indigo-200 text-4xl">tips_and_updates</mat-icon>
              </div>
              
              <h3 class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4">The Proactive Prompt</h3>
              <div class="bg-white p-4 rounded-2xl shadow-sm border border-indigo-100">
                <p class="text-xs font-bold text-gray-900 mb-1">"You have a 15min free window at 3:30p"</p>
                <p class="text-[10px] text-gray-500 mb-3">Do you want to meet someone new? Based on your goals, we recommend:</p>
                <div class="flex items-center gap-2 p-2 bg-indigo-50 rounded-xl">
                  <div class="w-8 h-8 rounded-full bg-indigo-200"></div>
                  <div>
                    <p class="text-[10px] font-bold text-gray-900">Sarah Jenkins</p>
                    <p class="text-[8px] text-gray-500">Expert in AI Strategy</p>
                  </div>
                  <button class="ml-auto px-3 py-1 bg-indigo-600 text-white text-[9px] font-bold rounded-lg">Meet</button>
                </div>
              </div>
            </div>

            <!-- Design Principle -->
            <div class="p-5 bg-indigo-900 rounded-2xl shadow-xl text-white">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-indigo-400 text-sm">architecture</mat-icon>
                <h4 class="text-indigo-400 text-[10px] font-bold uppercase tracking-widest">Design Principle</h4>
              </div>
              <p class="text-base font-light italic leading-snug">
                "Don't expect attendees to go on their own and network. <span class="text-indigo-400 font-medium">Encourage it</span> and make it really simple."
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
  `]
})
export class SlideEntryPointsComponent {
  readonly entryPoints = [
    { title: 'Participant List', icon: 'groups' },
    { title: 'Attendee Profiles', icon: 'account_circle' },
    { title: 'Exhibitor Profiles', icon: 'storefront' },
    { title: 'Chat Conversations', icon: 'chat' },
    { title: 'Proactive Prompts', icon: 'notifications_active' },
    { title: 'Welcome Modals', icon: 'waving_hand' }
  ];
}
