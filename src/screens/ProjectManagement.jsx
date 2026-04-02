import React, { useState } from 'react';
import { Card, CardTitle, Badge, Btn, Avatar, ProgressBar, Grid, FormGroup, CheckRow } from '../components';

export function NewProject() {
  const [step, setStep] = useState(2);
  const steps = ['Details', 'Teams', 'Phases', 'Budget', 'Review'];
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24 }}>
        {steps.map((s, i) => {
          const state = i + 1 < step ? 'done' : i + 1 === step ? 'active' : 'pending';
          return (
            <React.Fragment key={s}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div onClick={() => setStep(i + 1)} style={{ width: 30, height: 30, borderRadius: '50%', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  background: state === 'done' ? 'var(--teal-soft)' : state === 'active' ? 'var(--accent-soft)' : 'var(--bg-hover)',
                  border: `1.5px solid ${state === 'done' ? 'var(--teal)' : state === 'active' ? 'var(--accent)' : 'var(--border)'}`,
                  color: state === 'done' ? 'var(--teal)' : state === 'active' ? '#a89cf7' : 'var(--text-tertiary)',
                }}>{state === 'done' ? '✓' : i + 1}</div>
                <div style={{ fontSize: 11, color: state === 'active' ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>{s}</div>
              </div>
              {i < steps.length - 1 && <div style={{ height: 1.5, flex: 2, background: i + 1 < step ? 'var(--teal)' : 'var(--border)', marginBottom: 22 }} />}
            </React.Fragment>
          );
        })}
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Step {step} — {steps[step - 1]}</CardTitle>
          <FormGroup label="Project name"><input type="text" defaultValue="Project Horizon — Phase 2" /></FormGroup>
          <FormGroup label="Client"><input type="text" defaultValue="TechCorp Solutions Ltd." /></FormGroup>
          <FormGroup label="Project type"><select><option>Software Development</option><option>Marketing Campaign</option><option>Operations</option></select></FormGroup>
          <Grid cols={2} gap={8}>
            <FormGroup label="Start date"><input type="text" defaultValue="01 Nov 2025" /></FormGroup>
            <FormGroup label="Deadline"><input type="text" defaultValue="31 Mar 2026" /></FormGroup>
          </Grid>
          <FormGroup label="Priority"><select><option>High</option><option>Critical</option><option>Medium</option></select></FormGroup>
          <FormGroup label="Description"><textarea rows={3} defaultValue="Full-stack portal development with CRM integration and client-facing dashboard." /></FormGroup>
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            <Btn onClick={() => setStep(Math.max(1, step - 1))}>← Back</Btn>
            <Btn primary onClick={() => setStep(Math.min(5, step + 1))}>Next: {steps[step] || 'Launch'} →</Btn>
          </div>
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Team selection</CardTitle>
            {[['Development', 'accent', '8 members', true], ['Business Analyst', 'blue', '2 members', true], ['Sales', 'teal', '3 members', true], ['Marketing', 'amber', '2 members', false], ['Operations', 'pink', '4 members', true]].map(([name, c, count, checked]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 15, height: 15, borderRadius: 4, background: checked ? 'var(--teal-soft)' : 'transparent', border: `1px solid ${checked ? 'var(--teal)' : 'var(--border-light)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {checked && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                </div>
                <span style={{ flex: 1, fontSize: 12, color: 'var(--text-primary)' }}>{name}</span>
                <Badge color={c}>{count}</Badge>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle>Project settings</CardTitle>
            <CheckRow done>Use Agile sprints (2-week)</CheckRow>
            <CheckRow>Waterfall phases</CheckRow>
            <CheckRow done>Enable client portal</CheckRow>
            <CheckRow done>Auto risk tracking</CheckRow>
            <CheckRow done>Time logging required</CheckRow>
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function TaskForm() {
  return (
    <Grid cols={2} gap={14}>
      <Card>
        <CardTitle>Task details</CardTitle>
        <FormGroup label="Task title"><input type="text" defaultValue="Payment gateway integration" /></FormGroup>
        <Grid cols={2} gap={8}>
          <FormGroup label="Department"><select><option>Development</option><option>Sales</option><option>Marketing</option></select></FormGroup>
          <FormGroup label="Priority"><select><option>Critical</option><option>High</option><option>Medium</option><option>Low</option></select></FormGroup>
        </Grid>
        <Grid cols={2} gap={8}>
          <FormGroup label="Start date"><input type="text" defaultValue="05 Nov 2025" /></FormGroup>
          <FormGroup label="Due date"><input type="text" defaultValue="20 Nov 2025" /></FormGroup>
        </Grid>
        <Grid cols={2} gap={8}>
          <FormGroup label="Story points"><input type="text" defaultValue="8" /></FormGroup>
          <FormGroup label="Sprint"><select><option>Sprint 4</option><option>Sprint 5</option></select></FormGroup>
        </Grid>
        <FormGroup label="Description"><textarea rows={3} defaultValue="Integrate Razorpay API with backend. Includes webhook setup, error handling, and sandbox testing." /></FormGroup>
        <FormGroup label="Acceptance criteria"><textarea rows={2} defaultValue="Payment flow complete end-to-end. All edge cases handled. Unit tests passing." /></FormGroup>
        <FormGroup label="Dependencies"><input type="text" defaultValue="DB schema design (Done), Auth module (In review)" /></FormGroup>
        <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius-md)', padding: 12, textAlign: 'center', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 12 }}>Drop files or click to attach</div>
        <div style={{ display: 'flex', gap: 8 }}><Btn primary>Create Task</Btn><Btn>Save Draft</Btn><Btn>Cancel</Btn></div>
      </Card>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>Assign members</CardTitle>
          {[['RK', 'Rahul K.', 'Lead Dev', 'accent', true], ['TP', 'Teena P.', 'Backend', 'accent', true], ['NJ', 'Nisha J.', 'BA', 'blue', false], ['VR', 'Vijay R.', 'Ops', 'pink', false]].map(([ini, name, role, c, checked]) => (
            <div key={ini} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <Avatar initials={ini} color={c} size={28} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>{name}</div><div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>{role}</div></div>
              <div style={{ width: 15, height: 15, borderRadius: 4, background: checked ? 'var(--teal-soft)' : 'transparent', border: `1px solid ${checked ? 'var(--teal)' : 'var(--border-light)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {checked && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>Sub-tasks</CardTitle>
          <CheckRow done badge={<Badge color="teal">Done</Badge>}>API key setup</CheckRow>
          <CheckRow badge={<Badge color="amber">In Progress</Badge>}>Webhook listener</CheckRow>
          <CheckRow badge={<Badge color="gray">Pending</Badge>}>Error handling</CheckRow>
          <CheckRow badge={<Badge color="gray">Pending</Badge>}>Sandbox testing</CheckRow>
          <Btn style={{ width: '100%', marginTop: 10 }}>+ Add sub-task</Btn>
        </Card>
        <Card>
          <CardTitle>Labels</CardTitle>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
            {['Backend', 'API', 'Critical', 'Sprint 4', 'Payment'].map(t => <Badge key={t} color={t === 'Critical' ? 'red' : t === 'API' ? 'blue' : 'accent'}>{t}</Badge>)}
          </div>
          <input type="text" placeholder="Add label..." />
        </Card>
      </div>
    </Grid>
  );
}

export function CalendarView() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const events = {
    3: [{ label: 'Sprint kickoff', color: 'var(--accent)' }],
    5: [{ label: 'Dev standup', color: 'var(--blue)' }],
    6: [{ label: 'Sales call', color: 'var(--teal)' }],
    10: [{ label: 'API review', color: 'var(--accent)' }],
    12: [{ label: 'Budget review', color: 'var(--amber)' }],
    17: [{ label: 'Phase 2 start', color: 'var(--accent)' }],
    19: [{ label: 'QA review', color: 'var(--blue)' }],
    24: [{ label: 'Client demo', color: 'var(--teal)' }],
    28: [{ label: 'Sprint review', color: 'var(--amber)' }],
  };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <Btn>← Prev</Btn>
        <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', flex: 1, textAlign: 'center' }}>November 2025</div>
        <Btn>Next →</Btn>
        <Btn primary>+ Add Event</Btn>
      </div>
      <Card style={{ marginBottom: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-tertiary)', padding: '4px 0' }}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
          {[...Array(5)].map((_, i) => <div key={`e${i}`} style={{ minHeight: 64 }} />)}
          {days.map(d => (
            <div key={d} style={{ minHeight: 64, background: d === 17 ? 'var(--accent-soft)' : 'var(--bg-card2)', borderRadius: 6, padding: 6, border: `1px solid ${d === 17 ? 'var(--accent-border)' : 'var(--border)'}` }}>
              <div style={{ fontSize: 11, color: d === 17 ? '#a89cf7' : 'var(--text-tertiary)', marginBottom: 2, fontWeight: d === 17 ? 600 : 400 }}>{d}</div>
              {events[d]?.map(ev => <div key={ev.label} style={{ background: ev.color, color: '#fff', borderRadius: 3, padding: '1px 4px', fontSize: 9, fontWeight: 500, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ev.label}</div>)}
            </div>
          ))}
        </div>
      </Card>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Upcoming this week</CardTitle>
          {[['Mon', 'blue', 'Dev standup — 9 AM', 'RK', 'accent'], ['Wed', 'teal', 'Sales client call — 11 AM', 'AK', 'teal'], ['Thu', 'amber', 'Budget review — 3 PM', 'PM', 'accent']].map(([d, c, label, av, ac]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <Badge color={c}>{d}</Badge>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span>
              <Avatar initials={av} color={ac} size={22} />
            </div>
          ))}
        </Card>
        <Card>
          <CardTitle>Deadlines this month</CardTitle>
          {[['Nov 20', 'red', 'Payment gateway integration'], ['Nov 24', 'amber', 'Client demo delivery'], ['Nov 28', 'gray', 'Sprint 4 review'], ['Nov 30', 'blue', 'Monthly report']].map(([d, c, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <Badge color={c}>{d}</Badge>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
            </div>
          ))}
        </Card>
      </Grid>
    </div>
  );
}

export function Milestones() {
  const phases = [
    { label: 'Requirements', left: 0, width: 18, color: 'var(--accent)', status: 'Done' },
    { label: 'UI/UX Design', left: 15, width: 18, color: 'var(--blue)', status: 'Done' },
    { label: 'Development', left: 28, width: 38, color: 'var(--teal)', status: 'In Progress' },
    { label: 'QA & Testing', left: 62, width: 18, color: 'var(--amber)', status: 'Upcoming' },
    { label: 'UAT', left: 78, width: 12, color: 'var(--pink)', status: 'Upcoming' },
    { label: 'Go-Live', left: 90, width: 10, color: 'var(--green)', status: 'Final' },
  ];
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}><Btn primary>+ Add Milestone</Btn><Btn>Add Phase</Btn><Btn>Export Gantt</Btn></div>
      <Card style={{ marginBottom: 14 }}>
        <CardTitle action="Project Horizon">Phase timeline</CardTitle>
        {phases.map(p => (
          <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 100, fontSize: 11, color: 'var(--text-secondary)', flexShrink: 0 }}>{p.label}</div>
            <div style={{ flex: 1, height: 22, background: 'var(--bg-hover)', borderRadius: 5, position: 'relative' }}>
              <div style={{ position: 'absolute', left: `${p.left}%`, width: `${p.width}%`, height: '100%', background: p.color, borderRadius: 5, opacity: 0.85, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                <span style={{ fontSize: 10, color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>{p.status}</span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Milestones</CardTitle>
          <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
            <thead><tr>{['Milestone', 'Date', 'Owner', 'Status'].map(h => <th key={h} style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: 11 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[['Kickoff sign-off','Oct 1','PM','teal','Done'],['SRS approved','Oct 15','BA','teal','Done'],['Phase 1 delivery','Nov 10','Dev','teal','Done'],['Client demo','Nov 24','PM','amber','Upcoming'],['Phase 2 delivery','Dec 31','Dev','gray','Pending'],['UAT sign-off','Jan 15','Client','gray','Pending'],['Go-live','Jan 31','Ops','gray','Pending']].map(([m, d, o, c, s], i, arr) => (
                <tr key={m} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={{ padding: '8px', color: 'var(--text-primary)' }}>{m}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)' }}>{d}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)' }}>{o}</td>
                  <td style={{ padding: '8px' }}><Badge color={c}>{s}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <CardTitle>Phase completion</CardTitle>
          <ProgressBar label="Requirements" value={100} color="var(--accent)" />
          <ProgressBar label="UI/UX Design" value={100} color="var(--blue)" />
          <ProgressBar label="Development" value={62} color="var(--teal)" />
          <ProgressBar label="QA & Testing" value={0} color="var(--amber)" />
          <ProgressBar label="UAT" value={0} color="var(--pink)" />
          <ProgressBar label="Go-Live" value={0} color="var(--green)" />
        </Card>
      </Grid>
    </div>
  );
}
