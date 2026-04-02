import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './screens/Dashboard';
import Tasks from './screens/Tasks';
import { Team, Documents, ClientComms } from './screens/TeamDocComms';
import { Roles, Reports, Notifications } from './screens/RolesReportsNotifs';
import { NewProject, TaskForm, CalendarView, Milestones } from './screens/ProjectManagement';
import { TimeTracking, Budget, RiskRegister, ChangeRequests } from './screens/Operations';
import { TeamMessaging, ClientPortal, Settings, MobilePreview } from './screens/Collaboration';

const SCREENS = {
  dashboard:  { label: 'Dashboard',            cta: '+ New Project',    component: Dashboard },
  tasks:      { label: 'Tasks & Sprints',       cta: '+ Add Task',       component: Tasks },
  calendar:   { label: 'Calendar & Schedule',   cta: '+ Add Event',      component: CalendarView },
  milestones: { label: 'Milestones & Phases',   cta: '+ Add Milestone',  component: Milestones },
  timetrack:  { label: 'Time Tracking',         cta: 'Log Time',         component: TimeTracking },
  budget:     { label: 'Budget & Cost',         cta: '+ Add Expense',    component: Budget },
  risk:       { label: 'Risk Register',         cta: '+ Log Risk',       component: RiskRegister },
  change:     { label: 'Change Requests',       cta: '+ New CR',         component: ChangeRequests },
  team:       { label: 'Team Assignment',       cta: '+ Assign Member',  component: Team },
  docs:       { label: 'Document Management',   cta: '+ Upload File',    component: Documents },
  comms:      { label: 'Client Communications', cta: '+ New Message',    component: ClientComms },
  messages:   { label: 'Team Messaging',        cta: 'New Channel',      component: TeamMessaging },
  portal:     { label: 'Client Portal',         cta: 'Send Update',      component: ClientPortal },
  roles:      { label: 'Role Master',           cta: '+ Create Role',    component: Roles },
  reports:    { label: 'Reports & Analytics',   cta: 'Export PDF',       component: Reports },
  notifs:     { label: 'Notifications',         cta: 'Configure Alerts', component: Notifications },
  taskform:   { label: 'New Task Form',         cta: 'Save Task',        component: TaskForm },
  newproject: { label: 'New Project Wizard',    cta: '+ Create Project', component: NewProject },
  settings:   { label: 'Settings & Profile',    cta: 'Save Changes',     component: Settings },
  mobile:     { label: 'Mobile Preview',        cta: 'Export APK',       component: MobilePreview },
};

export default function App() {
  const [active, setActive] = useState('dashboard');
  const screen = SCREENS[active] || SCREENS.dashboard;
  const ActiveComponent = screen.component;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={active} onChange={setActive} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Topbar */}
        <div style={{
          height: 52, background: 'var(--bg-sidebar)', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', padding: '0 20px', gap: 12, flexShrink: 0,
        }}>
          <h1 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', flex: 1, letterSpacing: '-0.01em' }}>{screen.label}</h1>
          <input type="text" placeholder="Search tasks, projects, people..." style={{ width: 220 }} />
          <button style={{
            padding: '7px 14px', fontSize: 12, fontWeight: 600, borderRadius: 8,
            background: 'transparent', border: '1px solid var(--border)',
            color: 'var(--text-secondary)', cursor: 'pointer',
          }}>Filter</button>
          <button style={{
            padding: '7px 16px', fontSize: 12, fontWeight: 600, borderRadius: 8,
            background: 'var(--accent)', border: '1px solid var(--accent-border)',
            color: '#fff', cursor: 'pointer',
          }}>{screen.cta}</button>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--red)', border: '2px solid var(--bg-sidebar)', position: 'relative' }} title="3 unread notifications" />
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}
