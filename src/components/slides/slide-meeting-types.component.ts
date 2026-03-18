import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Users, Video, Calendar, Infinity } from 'lucide-angular';

@Component({
  selector: 'app-slide-meeting-types',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Versatility</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Different Types of Meetings
          </h1>
          <div class="w-20 h-1 bg-emerald-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          @for (type of meetingTypes; track type.title) {
            <div class="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <lucide-icon [name]=\"type.icon\" [size]=\"26\"></lucide-icon>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1">{{ type.title }}</h3>
              <p class="text-[11px] text-gray-500 leading-relaxed">
                {{ type.description }}
              </p>
            </div>
          }
        </div>

        <div class="relative">
          <div class="p-8 bg-emerald-900 rounded-3xl shadow-2xl text-white overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div class="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <lucide-icon [name]=\"Infinity\" [size]=\"35\" class=\"text-emerald-400\"></lucide-icon>
              </div>
              <div>
                <h4 class="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">The Long Tail</h4>
                <p class="text-2xl md:text-3xl font-light leading-tight">
                  Networking <span class="text-emerald-400 font-medium italic">does not end</span> when the event ends.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Decorative element -->
          <div class="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-emerald-200 rounded-br-3xl"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideMeetingTypesComponent {
  readonly Infinity = Infinity;

  readonly meetingTypes = [
    { 
      title: 'In-Person Meetings', 
      description: 'Attendees meet physically anywhere — inside the venue or elsewhere in the city.',
      icon: Users
    },
    { 
      title: 'Video Meetings', 
      description: 'Connect through integrated video calls for remote participants or post-session follow-ups.',
      icon: Video
    },
    { 
      title: 'Future Meetings', 
      description: 'Schedule meetings after the event through direct calendar invitations and sync.',
      icon: Calendar
    }
  ];
}
