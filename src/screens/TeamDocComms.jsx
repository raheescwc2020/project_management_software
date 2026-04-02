import React from 'react';
import { Card, CardTitle, Badge, Btn, Avatar, ProgressBar, Grid, FormGroup } from '../components';

export function Team() {
  const depts = [
    { name: 'Development', color: 'accent', members: [{ ini: 'RK', name: 'Rahul K.', role: 'Lead Dev', tasks: 5, load: 92 }, { ini: 'TP', name: 'Teena P.', role: 'Backend', tasks: 3, load: 60 }, { ini: 'AJ', name: 'Arjun J.', role: 'Frontend', tasks: 4, load: 75 }] },
    { name: 'Sales', color: 'teal', members: [{ ini: 'AK', name: 'Anil K.', role: 'Sales Lead', tasks: 4, load: 75 }, { ini: 'DM', name: 'Divya M.', role: 'Sales Exec', tasks: 2, load: 40 }] },
    { name: 'Marketing', color: 'amber', members: [{ ini: 'SM', name: 'Sneha M.', role: 'Brand Lead', tasks: 3, load: 55 }] },
    { name: 'Operations', color: 'pink', members: [{ ini: 'VR', name: 'Vijay R.', role: 'Ops Manager', tasks: 6, load: 88 }, { ini: 'PK', name: 'Pooja K.', role: 'Ops Analyst', tasks: 3, load: 50 }] },
    { name: 'Business Analyst', color: 'blue', members: [{ ini: 'NJ', name: 'Nisha J.', role: 'Sr. BA', tasks: 4, load: 70 }] },
  ];
  const deptColors = { accent: 'var(--accent)', teal: 'var(--teal)', amber: 'var(--amber)', pink: 'var(--pink)', blue: 'var(--blue)' };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Btn primary>+ Assign Member</Btn>
        <select style={{ fontSize: 12, padding: '6px 10px', background: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
          <option>All Departments</option>
          {depts.map(d => <option key={d.name}>{d.name}</option>)}
        </select>
        <Btn>Workload View</Btn>
        <Btn>Availability</Btn>
      </div>
      <Grid cols={3} gap={12}>
        {depts.map(dept => (
          <Card key={dept.name}>
            <div style={{ background: `${deptColors[dept.color]}15`, border: `1px solid ${deptColors[dept.color]}30`, borderRadius: 8, padding: '8px 10px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: deptColors[dept.color] }}>{dept.name}</span>
              <Badge color={dept.color} style={{ marginLeft: 'auto' }}>{dept.members.length} members</Badge>
            </div>
            {dept.members.map(m => (
              <div key={m.ini} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <Avatar initials={m.ini} color={dept.color} size={30} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>{m.role} · {m.tasks} tasks</div>
                </div>
                <div style={{ width: 60 }}>
                  <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginBottom: 3, textAlign: 'right' }}>{m.load}%</div>
                  <div style={{ height: 4, background: 'var(--bg-hover)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: `${m.load}%`, height: '100%', background: m.load > 85 ? 'var(--red)' : deptColors[dept.color], borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            ))}
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export function Documents() {
  const docs = [
    { name: 'Project_Charter_v3.pdf', type: 'PDF', by: 'PM', ago: '2 days ago', v: 'v3', status: 'teal', statusLabel: 'Approved', color: 'var(--red)' },
    { name: 'SRS_Document_final.docx', type: 'DOC', by: 'BA', ago: '5 days ago', v: 'v2', status: 'amber', statusLabel: 'Review', color: 'var(--blue)' },
    { name: 'Budget_Tracker_Q4.xlsx', type: 'XLS', by: 'Ops', ago: '1 week ago', v: 'v1', status: 'blue', statusLabel: 'Shared', color: 'var(--green)' },
    { name: 'Stakeholder_Deck.pptx', type: 'PPT', by: 'PM', ago: '3 days ago', v: 'v4', status: 'teal', statusLabel: 'Approved', color: 'var(--amber)' },
    { name: 'Test_Plan_v1.pdf', type: 'PDF', by: 'Dev', ago: 'Today', v: 'v1', status: 'gray', statusLabel: 'Draft', color: 'var(--red)' },
    { name: 'Wireframes_UI_v2.fig', type: 'FIG', by: 'Design', ago: '4 days ago', v: 'v2', status: 'accent', statusLabel: 'In Review', color: 'var(--accent)' },
  ];

  return (
    <div>
      <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center', marginBottom: 16, color: 'var(--text-tertiary)', fontSize: 13 }}>
        Drop files here or <span style={{ color: '#a89cf7', cursor: 'pointer' }}>click to upload</span> · PDF, DOCX, XLSX, PNG, FIG supported
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        <Btn primary>+ Upload</Btn>
        <select style={{ fontSize: 12, padding: '6px 10px', background: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
          <option>All types</option><option>PDF</option><option>DOCX</option><option>XLSX</option>
        </select>
        <Btn>My uploads</Btn>
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Project documents</CardTitle>
          {docs.map(d => (
            <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 34, height: 40, borderRadius: 6, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600, color: d.color, background: `${d.color}12`, flexShrink: 0 }}>{d.type}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.name}</div>
                <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>By {d.by} · {d.ago} · {d.v}</div>
              </div>
              <Badge color={d.status}>{d.statusLabel}</Badge>
            </div>
          ))}
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle action="SRS_Document.docx">Version history</CardTitle>
            {[{ v: 'v2', note: 'Added functional spec section', when: 'Today' }, { v: 'v1', note: 'Initial draft uploaded', when: '5 days ago' }].map(v => (
              <div key={v.v} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 12 }}>
                <Badge color={v.v === 'v2' ? 'blue' : 'gray'}>{v.v}</Badge>
                <span style={{ flex: 1, color: 'var(--text-secondary)' }}>{v.note}</span>
                <span style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>{v.when}</span>
              </div>
            ))}
          </Card>
          <Card>
            <CardTitle>Access permissions</CardTitle>
            {[{ role: 'PM', label: 'Project Managers', access: 'Full', color: 'accent' }, { role: 'BA', label: 'Business Analysts', access: 'Edit', color: 'blue' }, { role: 'CL', label: 'Client', access: 'View', color: 'gray' }, { role: 'DV', label: 'Developers', access: 'View', color: 'accent' }].map(p => (
              <div key={p.role} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <Avatar initials={p.role} color={p.color} size={26} />
                <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{p.label}</span>
                <Badge color={p.color}>{p.access}</Badge>
              </div>
            ))}
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function ClientComms() {
  const msgs = [
    { from: 'Priya M. (PM) → TechCorp', time: 'Today 10:32 AM', body: 'Sharing the updated project charter and Phase 2 deliverables. Kindly sign off by Friday EOD.', attach: 'Project_Charter_v3.pdf', status: 'amber', statusLabel: 'Action Required' },
    { from: 'Anil K. (Sales) → TechCorp', time: 'Yesterday 3:15 PM', body: 'Following up on the pricing proposal. Please confirm the revised commercials to proceed.', attach: 'Pricing_Proposal_v2.pdf', status: 'teal', statusLabel: 'Acknowledged' },
    { from: 'Nisha J. (BA) → TechCorp', time: '3 days ago', body: 'MOM from the requirements workshop attached. Please confirm finalized acceptance criteria.', attach: 'MOM_Workshop_Oct.docx', status: 'green', statusLabel: 'Approved' },
  ];
  return (
    <Grid cols={2} gap={14}>
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <Btn primary>+ New Communication</Btn>
          <Btn>Filter by status</Btn>
          <Btn>Export log</Btn>
        </div>
        <Card>
          <CardTitle>Communication log</CardTitle>
          {msgs.map((m, i) => (
            <div key={i} style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px', marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)' }}>{m.from}</span>
                <span style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>{m.time}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.body}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <span style={{ fontSize: 10, color: 'var(--blue)', background: 'var(--blue-soft)', padding: '2px 8px', borderRadius: 4 }}>📎 {m.attach}</span>
                <Badge color={m.status}>{m.statusLabel}</Badge>
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>New communication</CardTitle>
          <FormGroup label="To"><input type="text" defaultValue="TechCorp (Client)" /></FormGroup>
          <FormGroup label="Subject"><input type="text" placeholder="Subject line..." /></FormGroup>
          <FormGroup label="Message"><textarea rows={4} placeholder="Write your message..." /></FormGroup>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn>Attach document</Btn>
            <Btn primary style={{ marginLeft: 'auto' }}>Send for Approval</Btn>
          </div>
        </Card>
        <Card>
          <CardTitle>Client approval status</CardTitle>
          {[{ done: true, label: 'MOM signed off', badge: <Badge color="teal">Done</Badge> }, { done: false, label: 'Phase 2 charter pending', badge: <Badge color="amber">Waiting</Badge> }, { done: false, label: 'CR-007 sign-off', badge: <Badge color="amber">Waiting</Badge> }].map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: 15, height: 15, borderRadius: 4, background: a.done ? 'var(--teal-soft)' : 'transparent', border: `1px solid ${a.done ? 'var(--teal)' : 'var(--border-light)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {a.done && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              </div>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{a.label}</span>
              {a.badge}
            </div>
          ))}
        </Card>
      </div>
    </Grid>
  );
}
