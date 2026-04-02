import React, { useState } from 'react';
import { Badge, Btn, Avatar } from '../components';

const COLS = [
  { id: 'backlog', label: 'Backlog', color: 'var(--text-tertiary)' },
  { id: 'progress', label: 'In Progress', color: 'var(--blue)' },
  { id: 'review', label: 'Review', color: 'var(--amber)' },
  { id: 'done', label: 'Done', color: 'var(--teal)' },
];

const TASKS = {
  backlog: [
    { id: 1, title: 'User auth module', dept: 'Dev', priority: 'High', av: 'RK', avColor: 'accent' },
    { id: 2, title: 'Market segmentation report', dept: 'BA', priority: 'Low', av: 'NJ', avColor: 'blue' },
    { id: 3, title: 'Vendor onboarding docs', dept: 'Ops', priority: 'Medium', av: 'VR', avColor: 'pink' },
    { id: 4, title: 'Social media calendar', dept: 'Mktg', priority: 'Medium', av: 'SM', avColor: 'amber' },
  ],
  progress: [
    { id: 5, title: 'Payment gateway integration', dept: 'Dev', priority: 'Critical', av: 'RK', avColor: 'accent', accent: 'var(--accent)' },
    { id: 6, title: 'Q4 campaign brief', dept: 'Mktg', priority: 'High', av: 'SM', avColor: 'amber', accent: 'var(--blue)' },
    { id: 7, title: 'CRM data migration', dept: 'Sales', priority: 'High', av: 'AK', avColor: 'teal', accent: 'var(--teal)' },
    { id: 8, title: 'SLA compliance audit', dept: 'Ops', priority: 'Medium', av: 'VR', avColor: 'pink', accent: 'var(--pink)' },
  ],
  review: [
    { id: 9, title: 'Mobile UI prototype', dept: 'Dev', priority: 'High', av: 'TP', avColor: 'accent' },
    { id: 10, title: 'Phase 2 test plan', dept: 'QA', priority: 'High', av: 'NJ', avColor: 'blue' },
  ],
  done: [
    { id: 11, title: 'Requirement gathering', dept: 'BA', priority: 'Done', av: 'NJ', avColor: 'blue' },
    { id: 12, title: 'Stakeholder kickoff', dept: 'PM', priority: 'Done', av: 'PM', avColor: 'accent' },
    { id: 13, title: 'DB schema design', dept: 'Dev', priority: 'Done', av: 'RK', avColor: 'accent' },
    { id: 14, title: 'Design mockups v1', dept: 'Design', priority: 'Done', av: 'TP', avColor: 'accent' },
  ],
};

const priorityColor = { Critical: 'red', High: 'amber', Medium: 'blue', Low: 'gray', Done: 'teal' };

export default function Tasks() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Dev', 'Sales', 'Marketing', 'Ops', 'BA'];

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <Btn primary>+ Add Task</Btn>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '6px 12px', fontSize: 11, fontWeight: 500,
            borderRadius: 'var(--radius-sm)', cursor: 'pointer',
            background: filter === f ? 'var(--accent-soft)' : 'var(--bg-hover)',
            color: filter === f ? '#a89cf7' : 'var(--text-secondary)',
            border: filter === f ? '1px solid var(--accent-border)' : '1px solid var(--border)',
          }}>{f}</button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <Btn>Kanban</Btn><Btn>List</Btn><Btn>Burndown</Btn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12 }}>
        {COLS.map(col => (
          <div key={col.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: col.color }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>{col.label}</span>
              <span style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)', borderRadius: 10, padding: '1px 7px', fontSize: 10, color: 'var(--text-tertiary)' }}>{TASKS[col.id].length}</span>
            </div>
            {TASKS[col.id].map(t => (
              <div key={t.id} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderLeft: t.accent ? `3px solid ${t.accent}` : '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', padding: '10px 12px', marginBottom: 8,
                cursor: 'grab', transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = t.accent || 'var(--border)'}
              >
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>{t.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Badge color="gray">{t.dept}</Badge>
                  <Badge color={priorityColor[t.priority] || 'gray'}>{t.priority}</Badge>
                  <div style={{ marginLeft: 'auto' }}>
                    <Avatar initials={t.av} color={t.avColor} size={22} />
                  </div>
                </div>
              </div>
            ))}
            <button style={{
              width: '100%', padding: '8px', fontSize: 11,
              background: 'transparent', border: '1px dashed var(--border)',
              borderRadius: 'var(--radius-md)', color: 'var(--text-tertiary)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.color = '#a89cf7'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-tertiary)'; }}
            >+ Add card</button>
          </div>
        ))}
      </div>
    </div>
  );
}
