import React from 'react';
import { SectionDivider } from './components';
import {
  LayoutDashboard, ListTodo, Users, FolderOpen, MessageSquare,
  ShieldCheck, BarChart2, Bell, PlusCircle, ClipboardList,
  Calendar, Flag, Clock, Wallet, AlertTriangle, GitPullRequest,
  MessagesSquare, Globe, Settings, Smartphone
} from 'lucide-react';

const NAV = [
  { section: 'Overview' },
  { id: 'dashboard',   label: 'Dashboard',         icon: LayoutDashboard },
  { id: 'tasks',       label: 'Tasks & Sprints',    icon: ListTodo },
  { id: 'calendar',    label: 'Calendar',           icon: Calendar },
  { id: 'milestones',  label: 'Milestones',         icon: Flag },
  { section: 'Management' },
  { id: 'timetrack',   label: 'Time Tracking',      icon: Clock },
  { id: 'budget',      label: 'Budget & Cost',      icon: Wallet },
  { id: 'risk',        label: 'Risk Register',      icon: AlertTriangle },
  { id: 'change',      label: 'Change Requests',    icon: GitPullRequest },
  { section: 'People & Docs' },
  { id: 'team',        label: 'Team',               icon: Users },
  { id: 'docs',        label: 'Documents',          icon: FolderOpen },
  { id: 'comms',       label: 'Client Comms',       icon: MessageSquare },
  { id: 'messages',    label: 'Team Messaging',     icon: MessagesSquare },
  { section: 'Portal & System' },
  { id: 'portal',      label: 'Client Portal',      icon: Globe },
  { id: 'roles',       label: 'Role Master',        icon: ShieldCheck },
  { id: 'reports',     label: 'Reports',            icon: BarChart2 },
  { id: 'notifs',      label: 'Notifications',      icon: Bell },
  { id: 'taskform',    label: 'New Task Form',      icon: ClipboardList },
  { id: 'newproject',  label: 'New Project',        icon: PlusCircle },
  { id: 'settings',    label: 'Settings',           icon: Settings },
  { id: 'mobile',      label: 'Mobile Preview',     icon: Smartphone },
];

export default function Sidebar({ active, onChange }) {
  return (
    <div style={{
      width: 220, flexShrink: 0,
      background: 'var(--bg-sidebar)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Logo */}
      <div style={{ padding: '16px 14px 12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LayoutDashboard size={15} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>ProTrack</div>
          <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Project Management</div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 8 }}>
        {NAV.map((item, i) => {
          if (item.section) return <SectionDivider key={i}>{item.section}</SectionDivider>;
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <div key={item.id} onClick={() => onChange(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                padding: '8px 10px', margin: '1px 8px',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                fontSize: 12, fontWeight: isActive ? 600 : 400,
                color: isActive ? '#a89cf7' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-soft)' : 'transparent',
                border: isActive ? '1px solid var(--accent-border)' : '1px solid transparent',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
            >
              <Icon size={14} strokeWidth={isActive ? 2.2 : 1.8} />
              {item.label}
            </div>
          );
        })}
      </div>

      {/* User */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#a89cf7', flexShrink: 0 }}>PM</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>Priya Menon</div>
          <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Project Manager</div>
        </div>
      </div>
    </div>
  );
}
