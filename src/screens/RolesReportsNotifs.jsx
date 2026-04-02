import React from 'react';
import { Card, CardTitle, Badge, Btn, ProgressBar, Grid } from '../components';

export function Roles() {
  const modules = ['Dashboard', 'Tasks', 'Team Mgmt', 'Documents', 'Client Comms', 'Role Master', 'Reports', 'Notifications'];
  const roles = ['Admin', 'PM', 'Dev', 'Sales', 'Client'];
  const matrix = [
    ['CRUD', 'CRUD', 'R', 'R', 'R'],
    ['CRUD', 'CRUD', 'CRU', 'R', '—'],
    ['CRUD', 'CRUD', 'R', '—', '—'],
    ['CRUD', 'CRUD', 'CRU', 'R', 'R'],
    ['CRUD', 'CRUD', '—', 'CRU', 'R'],
    ['CRUD', '—', '—', '—', '—'],
    ['CRUD', 'CRUD', 'R', 'R', 'R'],
    ['CRUD', 'CRU', 'RU', 'RU', 'R'],
  ];
  const permColor = { CRUD: 'teal', CRU: 'blue', R: 'amber', '—': 'gray' };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Btn primary>+ Create Role</Btn>
        <Btn>Audit Log</Btn>
        <Btn>Export Matrix</Btn>
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Permission matrix</CardTitle>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Module</th>
                  {roles.map(r => <th key={r} style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{r}</th>)}
                </tr>
              </thead>
              <tbody>
                {modules.map((mod, i) => (
                  <tr key={mod} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px', fontSize: 12, color: 'var(--text-primary)', fontWeight: 500 }}>{mod}</td>
                    {matrix[i].map((perm, j) => (
                      <td key={j} style={{ padding: '8px', textAlign: 'center' }}>
                        <Badge color={permColor[perm]}>{perm}</Badge>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <Badge color="teal">CRUD = Full</Badge>
            <Badge color="blue">CRU = No delete</Badge>
            <Badge color="amber">R = Read only</Badge>
            <Badge color="gray">— = No access</Badge>
          </div>
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle action="Project Manager">Role editor</CardTitle>
            {[['Dashboard access', 'teal', 'Full'], ['Create projects', 'teal', 'Allowed'], ['Delete projects', 'gray', 'Denied'], ['Role management', 'gray', 'Denied'], ['View all reports', 'teal', 'Allowed'], ['Client comms', 'teal', 'Full']].map(([label, c, v]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span>
                <Badge color={c}>{v}</Badge>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}><Btn primary>Save changes</Btn><Btn>Reset</Btn></div>
          </Card>
          <Card>
            <CardTitle>Active users by role</CardTitle>
            <ProgressBar label="Developers" value={80} labelRight="8" color="var(--accent)" />
            <ProgressBar label="Project Managers" value={30} labelRight="3" color="var(--blue)" />
            <ProgressBar label="Clients" value={50} labelRight="5" color="var(--teal)" />
            <ProgressBar label="Sales" value={40} labelRight="4" color="var(--amber)" />
            <ProgressBar label="Operations" value={45} labelRight="4" color="var(--pink)" />
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function Reports() {
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Btn primary>Export PDF</Btn>
        <Btn>Export Excel</Btn>
        <Btn>Schedule report</Btn>
        <select style={{ fontSize: 12, padding: '6px 10px', background: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
          <option>Sprint 4</option><option>Sprint 3</option><option>All Sprints</option>
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, marginBottom: 16 }}>
        {[['Tasks this sprint', '48', '38 completed', 'var(--teal)'], ['On-time delivery', '79%', '+4% vs last sprint', 'var(--teal)'], ['Avg task duration', '2.4d', '+0.3d over estimate', 'var(--amber)'], ['SLA breaches', '2', 'Needs attention', 'var(--red)']].map(([l, v, s, c]) => (
          <div key={l} style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 14 }}>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 6 }}>{l}</div>
            <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, marginTop: 5, color: c }}>{s}</div>
          </div>
        ))}
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle action="Sprint 4">Department performance</CardTitle>
          {[['Development', 78, 'var(--accent)'], ['Sales', 90, 'var(--teal)'], ['Marketing', 55, 'var(--amber)'], ['Operations', 83, 'var(--blue)'], ['Business Analyst', 67, 'var(--pink)']].map(([l, v, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ width: 110, fontSize: 11, color: 'var(--text-secondary)', flexShrink: 0 }}>{l}</span>
              <div style={{ flex: 1, height: 10, background: 'var(--bg-hover)', borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ width: `${v}%`, height: '100%', background: c, borderRadius: 5 }} />
              </div>
              <span style={{ width: 32, fontSize: 11, fontWeight: 500, color: 'var(--text-primary)', textAlign: 'right' }}>{v}%</span>
            </div>
          ))}
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>SLA tracker</CardTitle>
            {[['Phase 1 delivery', 'teal', 'On time'], ['CRM handover', 'teal', 'On time'], ['API integration', 'red', 'Breached'], ['Marketing assets', 'amber', 'At risk'], ['BA sign-off docs', 'teal', 'On time']].map(([l, c, s]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                <Badge color={c}>{s}</Badge>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle>Cumulative task completion</CardTitle>
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((w, i) => {
              const vals = [22, 45, 63, 79];
              return <ProgressBar key={w} label={w} value={vals[i]} color={`hsl(${220 + i * 15}, 70%, 60%)`} />;
            })}
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function Notifications() {
  const notifs = [
    { icon: '!', iconBg: 'var(--red-soft)', iconColor: 'var(--red)', title: 'Blocker raised', body: 'Payment gateway integration flagged as critical by Rahul K.', time: '10 min ago', dept: 'Development', unread: true },
    { icon: '↑', iconBg: 'var(--amber-soft)', iconColor: 'var(--amber)', title: 'Approval needed', body: 'Phase 2 budget awaiting PM sign-off', time: '1 hr ago', dept: 'Finance', unread: true },
    { icon: '✓', iconBg: 'var(--teal-soft)', iconColor: 'var(--teal)', title: 'Document approved', body: 'MOM_Workshop_Oct.docx signed off by TechCorp', time: '3 hrs ago', dept: 'Client', unread: true },
    { icon: '@', iconBg: 'var(--blue-soft)', iconColor: 'var(--blue)', title: 'You were mentioned', body: 'Mentioned in task "CRM data migration" by Anil K.', time: 'Yesterday', dept: 'Sales', unread: false },
    { icon: '+', iconBg: 'var(--accent-soft)', iconColor: '#a89cf7', title: 'New member added', body: 'Divya M. joined Sales team on Project Horizon', time: 'Yesterday', dept: 'Team', unread: false },
    { icon: '↗', iconBg: 'var(--green-soft)', iconColor: 'var(--green)', title: 'Sprint started', body: 'Sprint 4 kicked off with 48 tasks across 5 departments', time: '2 days ago', dept: 'PM', unread: false },
  ];
  return (
    <Grid cols={2} gap={14}>
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <Btn primary>Mark all read</Btn>
          <Btn>Configure alerts</Btn>
        </div>
        <Card>
          <CardTitle action={`${notifs.filter(n => n.unread).length} unread`}>All notifications</CardTitle>
          {notifs.map((n, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < notifs.length - 1 ? '1px solid var(--border)' : 'none', opacity: n.unread ? 1 : 0.6 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: n.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: n.iconColor, flexShrink: 0, fontWeight: 700 }}>{n.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: 'var(--text-primary)', lineHeight: 1.5 }}><strong>{n.title}</strong> — {n.body}</div>
                <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginTop: 3 }}>{n.time} · {n.dept}</div>
              </div>
              {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 4 }} />}
            </div>
          ))}
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>Alert settings</CardTitle>
          {[['Blocker alerts', 'teal', 'Email + In-app'], ['Task deadlines', 'blue', 'In-app only'], ['Client responses', 'teal', 'Email + In-app'], ['Approval requests', 'accent', 'Email + SMS'], ['Weekly digest', 'amber', 'Every Monday']].map(([l, c, v]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              <Badge color={c}>{v}</Badge>
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle>Integrations</CardTitle>
          {[['Slack #project-alerts', 'teal', 'Active'], ['MS Teams webhook', 'teal', 'Active'], ['SendGrid email', 'amber', 'Configured'], ['PagerDuty', 'gray', 'Not connected']].map(([l, c, v]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: c === 'teal' ? 'var(--teal)' : c === 'amber' ? 'var(--amber)' : 'var(--text-tertiary)', flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              <Badge color={c}>{v}</Badge>
            </div>
          ))}
        </Card>
      </div>
    </Grid>
  );
}
