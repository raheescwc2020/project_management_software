import React from 'react';
import { Card, CardTitle, Badge, Btn, Avatar, Grid, FormGroup } from '../components';

export function TeamMessaging() {
  const channels = ['# general', '# dev-team', '# sales-updates', '# client-comms', '# risk-alerts'];
  const dms = [['RK', 'Rahul K.', 'accent', true], ['AK', 'Anil K.', 'teal', false], ['NJ', 'Nisha J.', 'blue', true]];
  const msgs = [
    { ini: 'RK', color: 'accent', name: 'Rahul K.', time: '10:14 AM', text: 'API webhook is live on staging. Testing in progress — looks good so far!', me: false },
    { ini: 'NJ', color: 'blue', name: 'Nisha J.', time: '10:17 AM', text: "Great! I'll update the test cases document. Is the error handling included?", me: false },
    { ini: 'PM', color: 'accent', name: 'You', time: '10:22 AM', text: "Yes, let's plan a QA session for Thursday at 2 PM. Please confirm availability.", me: true },
    { ini: 'SM', color: 'amber', name: 'Sneha M.', time: '10:30 AM', text: 'Marketing assets for the client demo are ready. Shared in #client-comms channel.', me: false },
    { ini: 'VR', color: 'pink', name: 'Vijay R.', time: '10:45 AM', text: "Confirmed for Thursday. I'll also bring the SLA audit update.", me: false },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 14, height: '600px' }}>
      <div>
        <Card style={{ height: '100%', overflow: 'auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Channels</div>
          {channels.map((ch, i) => (
            <div key={ch} style={{ padding: '7px 8px', borderRadius: 6, marginBottom: 2, cursor: 'pointer', fontSize: 12, background: i === 0 ? 'var(--accent-soft)' : 'transparent', color: i === 0 ? '#a89cf7' : 'var(--text-secondary)', border: i === 0 ? '1px solid var(--accent-border)' : '1px solid transparent' }}>{ch}</div>
          ))}
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '14px 0 8px' }}>Direct messages</div>
          {dms.map(([ini, name, color, online]) => (
            <div key={ini} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 4px', borderRadius: 6, cursor: 'pointer', marginBottom: 2 }}>
              <Avatar initials={ini} color={color} size={24} />
              <span style={{ fontSize: 12, color: 'var(--text-secondary)', flex: 1 }}>{name}</span>
              {online && <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />}
            </div>
          ))}
        </Card>
      </div>
      <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}># general</span>
          <Badge color="gray">12 members</Badge>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            <Btn small>Search</Btn><Btn small>Pin</Btn>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, flexDirection: m.me ? 'row-reverse' : 'row' }}>
              <Avatar initials={m.ini} color={m.color} size={28} />
              <div style={{ maxWidth: '70%' }}>
                <div style={{ background: m.me ? 'var(--accent-soft)' : 'var(--bg-card2)', border: `1px solid ${m.me ? 'var(--accent-border)' : 'var(--border)'}`, borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
                  <div style={{ fontSize: 12, color: m.me ? '#a89cf7' : 'var(--text-primary)', lineHeight: 1.5 }}>{m.text}</div>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginTop: 4, textAlign: m.me ? 'right' : 'left' }}>{m.name} · {m.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', gap: 8, marginTop: 12 }}>
          <input type="text" placeholder="Message #general..." style={{ flex: 1 }} />
          <Btn>Attach</Btn>
          <Btn primary>Send</Btn>
        </div>
      </Card>
    </div>
  );
}

export function ClientPortal() {
  return (
    <div>
      <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-md)', padding: '10px 14px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)' }} />
        <span style={{ fontSize: 12, color: '#a89cf7' }}>Viewing as: <strong>TechCorp Solutions (Client)</strong> — Read-only access · Client portal mode</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, marginBottom: 16 }}>
        {[['Overall progress', '68%', 'On track', 'var(--teal)'], ['Current phase', 'Dev', 'Phase 2 active', null], ['Next milestone', 'Nov 24', 'Client demo', null], ['Open actions', '2', 'Your approval needed', 'var(--amber)']].map(([l, v, s, c]) => (
          <div key={l} style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 14 }}>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 6 }}>{l}</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, marginTop: 5, color: c || 'var(--text-secondary)' }}>{s}</div>
          </div>
        ))}
      </div>
      <Grid cols={2} gap={14}>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Your project progress</CardTitle>
            {[['Overall', 68, 'var(--accent)'], ['Development', 62, 'var(--blue)'], ['Testing', 0, 'var(--amber)'], ['UAT', 0, 'var(--teal)']].map(([l, v, c]) => (
              <div key={l} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-secondary)', marginBottom: 5 }}>
                  <span>{l}</span><span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{v}%</span>
                </div>
                <div style={{ height: 6, background: 'var(--bg-hover)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${v}%`, height: '100%', background: c, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle>Recent updates from PM</CardTitle>
            {[['Nov 17', 'blue', 'Phase 2 development 62% complete'], ['Nov 14', 'accent', 'CR-007 raised — WhatsApp module'], ['Nov 10', 'gray', 'Phase 1 handover completed'], ['Nov 3', 'teal', 'Sprint 4 kicked off']].map(([d, c, l]) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <Badge color={c}>{d}</Badge>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              </div>
            ))}
          </Card>
        </div>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Your approvals needed</CardTitle>
            {[{ title: 'Phase 2 project charter', sub: 'Please review and approve the updated scope document before development continues.', cost: null }, { title: 'CR-007 — WhatsApp notifications', sub: 'Additional development module requested.', cost: '₹80,000 · 40hrs' }].map((a, i) => (
              <div key={i} style={{ background: 'var(--amber-soft)', border: '1px solid #5a3a10', borderRadius: 'var(--radius-md)', padding: 12, marginBottom: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--amber)', marginBottom: 4 }}>{a.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 6 }}>{a.sub}</div>
                {a.cost && <Badge color="amber" style={{ marginBottom: 8 }}>{a.cost}</Badge>}
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}><Btn primary small>Approve</Btn><Btn small>Request Changes</Btn></div>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle>Shared documents</CardTitle>
            {[['Project_Charter_v3.pdf', 'PDF', 'teal', 'Approved'], ['MOM_Workshop_Oct.docx', 'DOC', 'teal', 'Signed'], ['Phase2_Scope.pdf', 'PDF', 'amber', 'Pending review'], ['Wireframes_v2.pdf', 'PDF', 'gray', 'FYI']].map(([name, type, c, s]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <Badge color={type === 'PDF' ? 'red' : 'blue'}>{type}</Badge>
                <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
                <Badge color={c}>{s}</Badge>
              </div>
            ))}
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function Settings() {
  return (
    <Grid cols={2} gap={14}>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>Profile settings</CardTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, padding: '12px', background: 'var(--bg-card2)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--accent-soft)', border: '2px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#a89cf7' }}>PM</div>
            <div><div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>Priya Menon</div><div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>Project Manager · ProTrack</div></div>
            <Btn small style={{ marginLeft: 'auto' }}>Edit photo</Btn>
          </div>
          <FormGroup label="Full name"><input type="text" defaultValue="Priya Menon" /></FormGroup>
          <FormGroup label="Email"><input type="text" defaultValue="priya.menon@company.com" /></FormGroup>
          <FormGroup label="Phone"><input type="text" defaultValue="+91 98765 43210" /></FormGroup>
          <Grid cols={2} gap={8}>
            <FormGroup label="Timezone"><select><option>IST — UTC+5:30</option><option>GMT</option><option>EST</option></select></FormGroup>
            <FormGroup label="Language"><select><option>English</option><option>Hindi</option></select></FormGroup>
          </Grid>
          <Btn primary>Save changes</Btn>
        </Card>
        <Card>
          <CardTitle>Security</CardTitle>
          {[['Password', null, 'Change', 'btn'], ['Two-factor auth (MFA)', 'teal', 'Enabled', 'badge'], ['Active sessions', 'blue', '2 devices', 'badge'], ['SSO provider', 'gray', 'Google Workspace', 'badge']].map(([l, c, v, type]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              {type === 'badge' ? <Badge color={c}>{v}</Badge> : <Btn small>{v}</Btn>}
            </div>
          ))}
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>System preferences</CardTitle>
          {[['Theme', ['System default', 'Light', 'Dark']], ['Date format', ['DD MMM YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD']], ['Currency', ['INR (₹)', 'USD ($)', 'EUR (€)']], ['Notification digest', ['Daily', 'Weekly', 'Never']]].map(([l, opts]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              <select style={{ width: 'auto', fontSize: 11, padding: '4px 8px' }}>{opts.map(o => <option key={o}>{o}</option>)}</select>
            </div>
          ))}
        </Card>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>Integrations</CardTitle>
          {[['Google Calendar', 'teal', 'Connected'], ['Slack', 'teal', 'Connected'], ['MS Teams', 'teal', 'Connected'], ['GitHub', 'teal', 'Connected'], ['Jira', 'gray', 'Not connected'], ['Salesforce CRM', 'gray', 'Not connected']].map(([l, c, v]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: c === 'teal' ? 'var(--teal)' : 'var(--text-tertiary)', flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              <Badge color={c}>{v}</Badge>
              {c === 'gray' && <Btn small>Connect</Btn>}
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle>Organisation settings</CardTitle>
          <FormGroup label="Company name"><input type="text" defaultValue="Acme Technologies Pvt Ltd" /></FormGroup>
          <Grid cols={2} gap={8}>
            <FormGroup label="Default currency"><select><option>INR (₹)</option></select></FormGroup>
            <FormGroup label="Working days"><select><option>Mon – Fri</option><option>Mon – Sat</option></select></FormGroup>
          </Grid>
          <Btn primary>Update organisation</Btn>
        </Card>
      </div>
    </Grid>
  );
}

export function MobilePreview() {
  return (
    <div style={{ display: 'flex', gap: 32, justifyContent: 'center', padding: '20px 0', flexWrap: 'wrap' }}>
      {/* Phone 1 - Home */}
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-tertiary)', textAlign: 'center', marginBottom: 10 }}>Home Dashboard</div>
        <div style={{ width: 230, background: 'var(--bg-card2)', borderRadius: 28, padding: 12, border: '2px solid var(--border-light)' }}>
          <div style={{ background: 'var(--bg-card)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: 'var(--accent)', padding: '14px 14px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" fill="#fff" viewBox="0 0 14 14"><rect x="1" y="1" width="5" height="5" rx="1"/><rect x="8" y="1" width="5" height="5" rx="1"/><rect x="1" y="8" width="5" height="5" rx="1"/><rect x="8" y="8" width="5" height="5" rx="1"/></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', flex: 1, letterSpacing: '-0.01em' }}>ProTrack</span>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#f56060' }} />
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>Good morning, Priya 👋</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 9, color: '#a89cf7', marginBottom: 3 }}>Active tasks</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>12</div>
                </div>
                <div style={{ background: 'var(--teal-soft)', border: '1px solid #1a5040', borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 9, color: 'var(--teal)', marginBottom: 3 }}>Completed</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>38</div>
                </div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Today</div>
              {[['Payment gateway', 'var(--red)', 'Due today'], ['Budget review', 'var(--amber)', '3 PM'], ['Dev standup', 'var(--blue)', '9 AM']].map(([t, c, s]) => (
                <div key={t} style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: c, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: 'var(--text-primary)', flex: 1 }}>{t}</span>
                  <span style={{ fontSize: 9, color: 'var(--text-tertiary)' }}>{s}</span>
                </div>
              ))}
              <div style={{ background: 'var(--accent)', borderRadius: 8, padding: '10px 12px', marginTop: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)' }} />
                <span style={{ fontSize: 11, color: '#fff', flex: 1 }}>CRM migration</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'var(--mono)' }}>01:24</span>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', display: 'flex', padding: '10px 4px 8px' }}>
              {[['Home', '■'], ['Tasks', '☰'], ['Time', '◷'], ['Chat', '◻']].map(([l, ic], i) => (
                <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: 14, color: i === 0 ? '#a89cf7' : 'var(--text-tertiary)' }}>{ic}</div>
                  <div style={{ fontSize: 8, color: i === 0 ? '#a89cf7' : 'var(--text-tertiary)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Phone 2 - Tasks */}
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-tertiary)', textAlign: 'center', marginBottom: 10 }}>Tasks Screen</div>
        <div style={{ width: 230, background: 'var(--bg-card2)', borderRadius: 28, padding: 12, border: '2px solid var(--border-light)' }}>
          <div style={{ background: 'var(--bg-card)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: 'var(--bg-card2)', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', flex: 1 }}>Tasks & Sprints</span>
              <span style={{ fontSize: 10, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '2px 8px', borderRadius: 4, border: '1px solid var(--accent-border)' }}>Sprint 4</span>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                {['All', 'My tasks', 'Critical'].map((f, i) => <span key={f} style={{ padding: '4px 10px', borderRadius: 4, fontSize: 10, fontWeight: 500, background: i === 0 ? 'var(--accent-soft)' : 'var(--bg-hover)', color: i === 0 ? '#a89cf7' : 'var(--text-tertiary)', border: i === 0 ? '1px solid var(--accent-border)' : '1px solid var(--border)' }}>{f}</span>)}
              </div>
              {[['Payment gateway', 'var(--red)', 'Dev · Due today'], ['Q4 campaign brief', 'var(--amber)', 'Marketing · Nov 22'], ['CRM data migration', 'var(--blue)', 'Sales · Nov 25'], ['SLA compliance audit', 'var(--pink)', 'Ops · Nov 28']].map(([t, c, s]) => (
                <div key={t} style={{ borderLeft: `3px solid ${c}`, background: 'var(--bg-card2)', borderRadius: '0 8px 8px 0', padding: '10px 10px', marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-primary)' }}>{t}</div>
                  <div style={{ fontSize: 9, color: 'var(--text-tertiary)', marginTop: 3 }}>{s}</div>
                </div>
              ))}
              <button style={{ width: '100%', padding: '8px', background: 'var(--accent)', border: 'none', borderRadius: 8, color: '#fff', fontSize: 11, fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>+ Add task</button>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', display: 'flex', padding: '10px 4px 8px' }}>
              {['Home', 'Tasks', 'Time', 'Chat'].map((l, i) => (
                <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: 14, color: i === 1 ? '#a89cf7' : 'var(--text-tertiary)' }}>{'■☰◷◻'[i]}</div>
                  <div style={{ fontSize: 8, color: i === 1 ? '#a89cf7' : 'var(--text-tertiary)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
