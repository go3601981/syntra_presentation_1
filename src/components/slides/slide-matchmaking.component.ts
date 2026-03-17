import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-matchmaking',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-50/30 rounded-full blur-3xl -z-10"></div>
      
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-violet-600 uppercase tracking-[0.4em] mb-2">Looking Ahead</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-4">
            The Next Layer: <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Intelligent Matchmaking</span>
          </h1>
          <div class="w-16 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <!-- Problem Solved -->
          <div class="p-6 bg-white rounded-[24px] border border-slate-100 shadow-sm relative group overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-violet-400 transition-colors"></div>
            <div class="w-10 h-10 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <mat-icon class="text-xl">calendar_today</mat-icon>
            </div>
            <h3 class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 italic">The "How"</h3>
            <p class="text-base text-slate-600 font-light">
              Meeting coordination solves <span class="text-slate-900 font-semibold">how</span> people meet.
            </p>
          </div>

          <!-- The New Problem -->
          <div class="p-6 bg-white rounded-[24px] border-2 border-violet-600 shadow-xl shadow-violet-500/10 relative group overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-violet-600"></div>
            <div class="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-violet-200">
              <mat-icon class="text-xl">psychology</mat-icon>
            </div>
            <h3 class="text-[9px] font-bold text-violet-600 uppercase tracking-widest mb-1 italic">The "Who"</h3>
            <p class="text-base text-slate-900 font-bold">
              But another problem remains: <br>
              <span class="text-xl md:text-2xl text-violet-600 block mt-1">Who should I meet?</span>
            </p>
          </div>
        </div>

        <div class="p-6 bg-slate-900 rounded-[24px] text-white flex flex-col md:flex-row items-center gap-6 text-left">
          <div class="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
            <mat-icon class="text-violet-400 text-2xl">auto_awesome</mat-icon>
          </div>
          <div class="flex-1">
            <h4 class="text-violet-400 text-[9px] font-bold uppercase tracking-widest mb-1">The Capability</h4>
            <p class="text-lg font-light leading-snug mb-4">
              Introducing <span class="font-bold">Matchmaking Systems</span> that recommend relevant people based on shared goals and behavior.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              @for (signal of dataSignals; track signal) {
                <div class="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                  <mat-icon class="text-[10px] text-violet-400">check_circle</mat-icon>
                  <span class="text-[10px] text-gray-300 font-medium">{{ signal }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 32px; width: 32px; height: 32px; }
  `]
})
export class SlideMatchmakingComponent {
  readonly dataSignals = [
    'Shared Interests',
    'Professional Goals',
    'Session Attendance',
    'Job Functions'
  ];
}
