import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, UserSearch, Store, BadgeCheck, MessageSquare, Users, User, MessageCircle, CalendarCheck, ArrowDown } from 'lucide-angular';

@Component({
  selector: 'app-slide-participant-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
      
      <div class="relative z-10">
        <div class="mb-6 text-center">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">Core Discovery Feature</h2>
          <h1 class="text-2xl md:text-3xl font-bold text-[#1F2937] leading-tight">
            Participant List: Discovering People at the Event
          </h1>
          <div class="w-16 h-1 bg-blue-600 mt-3 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <div class="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p class="text-base text-gray-700 leading-relaxed mb-4">
                The <span class="text-blue-600 font-bold">Participant List</span> is the main way users discover other participants during the event.
              </p>
              
              <div class="grid grid-cols-2 gap-3">
                @for (action of actions; track action.title) {
                  <div class="p-3 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-blue-50 hover:border-blue-100 transition-all">
                    <div class="w-8 h-8 rounded-xl bg-white text-blue-600 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                      <lucide-icon [name]="action.icon" [size]="17"></lucide-icon>
                    </div>
                    <h4 class="font-bold text-gray-900 text-[10px]">{{ action.title }}</h4>
                  </div>
                }
              </div>
            </div>

            <div class="p-5 bg-indigo-600 rounded-3xl text-white shadow-lg">
              <h4 class="text-indigo-200 text-[9px] font-bold uppercase tracking-widest mb-2">Key Message</h4>
              <p class="text-lg font-light leading-snug">
                Meeting coordination should start <span class="font-bold">naturally</span> from the places where users already discover people.
              </p>
            </div>
          </div>

          <div class="relative">
            <div class="p-6 bg-white rounded-[32px] border border-gray-200 shadow-2xl relative overflow-hidden">
              <h4 class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Example Interaction Flow</h4>
              
              <div class="flex flex-col items-center gap-3">
                <!-- Flow Step 1 -->
                <div class="w-full flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                  <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <lucide-icon [name]="Users" [size]="17"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-[9px] font-bold text-blue-600 uppercase">Step 1</p>
                    <p class="font-bold text-gray-900 text-xs">Participant List</p>
                  </div>
                </div>

                <lucide-icon [name]="ArrowDown" [size]="20" class="text-gray-300"></lucide-icon>

                <!-- Flow Step 2 -->
                <div class="w-full flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                  <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <lucide-icon [name]="User" [size]="17"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-[9px] font-bold text-gray-400 uppercase">Step 2</p>
                    <p class="font-bold text-gray-900 text-xs">View Profile</p>
                  </div>
                </div>

                <lucide-icon [name]="ArrowDown" [size]="20" class="text-gray-300"></lucide-icon>

                <!-- Flow Step 3 -->
                <div class="w-full flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                  <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <lucide-icon [name]="MessageCircle" [size]="17"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-[9px] font-bold text-gray-400 uppercase">Step 3</p>
                    <p class="font-bold text-gray-900 text-xs">Start Chat</p>
                  </div>
                </div>

                <lucide-icon [name]="ArrowDown" [size]="20" class="text-gray-300"></lucide-icon>

                <!-- Flow Step 4 -->
                <div class="w-full flex items-center gap-3 p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-200">
                  <div class="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                    <lucide-icon [name]="CalendarCheck" [size]="17"></lucide-icon>
                  </div>
                  <div>
                    <p class="text-[9px] font-bold text-emerald-200 uppercase">Step 4</p>
                    <p class="font-bold text-white text-xs">Propose Meeting</p>
                  </div>
                </div>
              </div>
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
export class SlideParticipantListComponent {
  readonly Users = Users;
  readonly User = User;
  readonly MessageCircle = MessageCircle;
  readonly CalendarCheck = CalendarCheck;
  readonly ArrowDown = ArrowDown;

  readonly actions = [
    { title: 'Browse Attendees', icon: UserSearch },
    { title: 'Browse Exhibitors', icon: Store },
    { title: 'View Profiles', icon: BadgeCheck },
    { title: 'Start Chat', icon: MessageSquare }
  ];
}
