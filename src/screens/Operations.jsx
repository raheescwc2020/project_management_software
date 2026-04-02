import React, { useState, useEffect } from 'react';
import { Card, CardTitle, Badge, Btn, Avatar, ProgressBar, Grid, FormGroup, MetricCard } from '../components';

export function TimeTracking() {
  const [seconds, setSeconds] = useState(5078);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);
  const fmt = s => `${String(Math.floor(s / 3600)).padStart(2,'0')}:${String(Math.floor((s % 3600) / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, marginBottom: 16 }}>
        <MetricCard label="Hours this week" value="38h" sub="On track" subColor="var(--teal)" />
        <MetricCard label="Logged today" value="6.5h" sub="4 tasks" />
        <MetricCard label="Overtime" value="2h" sub="This week" subColor="var(--amber)" />
        <MetricCard label="Pending approval" value="3" sub="Timesheets" subColor="var(--amber)" />
      </div>
      <Grid cols={2} gap={14}>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Log time</CardTitle>
            <FormGroup label="Task"><select><option>Payment gateway integration</option><option>QA review</option><option>CRM migration</option></select></FormGroup>
            <Grid cols={2} gap={8}>
              <FormGroup label="Date"><input type="text" defaultValue="17 Nov 2025" /></FormGroup>
              <FormGroup label="Hours"><input type="text" defaultValue="3.5" /></FormGroup>
            </Grid>
            <FormGroup label="Notes"><textarea rows={2} defaultValue="Implemented webhook listener and error handling flows." /></FormGroup>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn primary>Log Time</Btn>
              <Btn onClick={() => setRunning(!running)}>{running ? 'Pause Timer' : 'Resume Timer'}</Btn>
            </div>
          </Card>
          <div style={{ background: running ? 'var(--accent-soft)' : 'var(--bg-card2)', border: `1px solid ${running ? 'var(--accent-border)' : 'var(--border)'}`, borderRadius: 'var(--radius-md)', padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: running ? 'var(--red)' : 'var(--text-tertiary)', animation: running ? 'pulse 1s infinite' : 'none' }} />
            <span style={{ fontSize: 12, color: 'var(--text-primary)', flex: 1 }}>CRM data migration</span>
            <span style={{ fontSize: 18, fontWeight: 600, color: running ? '#a89cf7' : 'var(--text-secondary)', fontFamily: 'var(--mono)' }}>{fmt(seconds)}</span>
            <Btn small onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</Btn>
          </div>
        </div>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle action="Today">Timesheet</CardTitle>
            <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
              <thead><tr>{['Task', 'Hours', 'Status'].map(h => <th key={h} style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: 11 }}>{h}</th>)}</tr></thead>
              <tbody>
                {[['API setup', '2.0', 'teal', 'Approved'], ['Webhook config', '3.5', 'amber', 'Pending'], ['Code review', '1.0', 'amber', 'Pending']].map(([t, h, c, s], i, arr) => (
                  <tr key={t} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '8px', color: 'var(--text-primary)' }}>{t}</td>
                    <td style={{ padding: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--mono)' }}>{h}</td>
                    <td style={{ padding: '8px' }}><Badge color={c}>{s}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <Card>
            <CardTitle action="This week">Team hours</CardTitle>
            <ProgressBar label="Rahul K." value={92} labelRight="42h" color="var(--accent)" />
            <ProgressBar label="Teena P." value={75} labelRight="36h" color="var(--blue)" />
            <ProgressBar label="Anil K." value={58} labelRight="28h" color="var(--teal)" />
            <ProgressBar label="Vijay R." value={70} labelRight="34h" color="var(--pink)" />
            <ProgressBar label="Nisha J." value={62} labelRight="30h" color="var(--blue)" />
          </Card>
        </div>
      </Grid>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}

export function Budget() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, marginBottom: 16 }}>
        <MetricCard label="Total budget" value="₹48L" sub="Project Horizon" />
        <MetricCard label="Spent to date" value="₹29.7L" sub="62% used" subColor="var(--amber)" />
        <MetricCard label="Remaining" value="₹18.3L" sub="4 months left" subColor="var(--teal)" />
        <MetricCard label="Variance" value="+₹1.2L" sub="Over estimate" subColor="var(--red)" />
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Budget by department</CardTitle>
          <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse', tableLayout: 'fixed' }}>
            <thead><tr>{['Department', 'Allocated', 'Spent', 'Remaining', 'Status'].map(h => <th key={h} style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: 11 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[['Development', '₹20L', '₹14.2L', '₹5.8L', 'teal', 'On track'], ['Marketing', '₹8L', '₹6.1L', '₹1.9L', 'amber', 'At risk'], ['Operations', '₹10L', '₹5.8L', '₹4.2L', 'teal', 'On track'], ['Sales', '₹6L', '₹2.4L', '₹3.6L', 'teal', 'On track'], ['BA / Research', '₹4L', '₹1.2L', '₹2.8L', 'teal', 'On track']].map(([d, al, sp, re, c, s], i, arr) => (
                <tr key={d} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={{ padding: '8px', color: 'var(--text-primary)', fontWeight: 500 }}>{d}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--mono)', fontSize: 11 }}>{al}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--mono)', fontSize: 11 }}>{sp}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--mono)', fontSize: 11 }}>{re}</td>
                  <td style={{ padding: '8px' }}><Badge color={c}>{s}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Monthly burn rate</CardTitle>
            <ProgressBar label="October" value={80} labelRight="₹7.2L" color="var(--accent)" />
            <ProgressBar label="November (est.)" value={95} labelRight="₹8.5L" color="var(--amber)" />
            <ProgressBar label="December (forecast)" value={72} labelRight="₹7.0L" color="var(--teal)" />
          </Card>
          <Card>
            <CardTitle>Add expense</CardTitle>
            <FormGroup label="Category"><select><option>Development</option><option>Marketing</option><option>Operations</option><option>Travel</option></select></FormGroup>
            <FormGroup label="Amount (₹)"><input type="text" placeholder="Enter amount..." /></FormGroup>
            <FormGroup label="Description"><input type="text" placeholder="Brief description..." /></FormGroup>
            <FormGroup label="Receipt"><input type="text" placeholder="Upload or paste URL..." /></FormGroup>
            <Btn primary style={{ width: '100%' }}>Submit Expense</Btn>
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function RiskRegister() {
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}><Btn primary>+ Log Risk</Btn><Btn>Export register</Btn><Btn>Filter by owner</Btn></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, marginBottom: 16 }}>
        <MetricCard label="Total risks" value="11" />
        <MetricCard label="Critical" value="3" sub="Needs action" subColor="var(--red)" />
        <MetricCard label="Mitigated" value="5" sub="Closed" subColor="var(--teal)" />
        <MetricCard label="Open" value="3" sub="Being monitored" subColor="var(--amber)" />
      </div>
      <Grid cols={2} gap={14}>
        <Card>
          <CardTitle>Risk register</CardTitle>
          <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
            <thead><tr>{['Risk', 'Impact', 'Prob.', 'Owner', 'Status'].map(h => <th key={h} style={{ padding: '6px 8px', color: 'var(--text-tertiary)', fontWeight: 500, textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: 11 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[['API vendor delay', 'red', 'High', '70%', 'RK', 'amber', 'Open'], ['Key dev attrition', 'red', 'High', '40%', 'PM', 'amber', 'Monitoring'], ['Scope creep', 'amber', 'Med', '60%', 'BA', 'teal', 'Mitigated'], ['Client sign-off delay', 'amber', 'Med', '50%', 'PM', 'amber', 'Open'], ['Budget overrun', 'red', 'High', '35%', 'Ops', 'amber', 'Monitoring'], ['3rd party fail', 'amber', 'Med', '30%', 'Dev', 'teal', 'Mitigated']].map(([r, ic, il, p, o, sc, s], i, arr) => (
                <tr key={r} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <td style={{ padding: '8px', color: 'var(--text-primary)', fontWeight: 500 }}>{r}</td>
                  <td style={{ padding: '8px' }}><Badge color={ic}>{il}</Badge></td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--mono)', fontSize: 11 }}>{p}</td>
                  <td style={{ padding: '8px', color: 'var(--text-secondary)' }}>{o}</td>
                  <td style={{ padding: '8px' }}><Badge color={sc}>{s}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Risk matrix</CardTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: 3 }}>
              <div />
              {['Low prob.', 'Med prob.', 'High prob.'].map(l => <div key={l} style={{ textAlign: 'center', fontSize: 9, color: 'var(--text-tertiary)', padding: '3px 0' }}>{l}</div>)}
              {[['High impact', [['var(--amber-soft)', '#FAEEDA', 'Medium'], ['var(--red-soft)', '#FCEBEB', 'Critical'], ['var(--red-soft)', '#FCEBEB', 'Critical ●']]], ['Med impact', [['var(--green-soft)', '#EAF3DE', 'Low'], ['var(--amber-soft)', '#FAEEDA', 'Medium ●'], ['var(--red-soft)', '#FCEBEB', 'Critical']]], ['Low impact', [['var(--green-soft)', '#EAF3DE', 'Low ●'], ['var(--green-soft)', '#EAF3DE', 'Low'], ['var(--amber-soft)', '#FAEEDA', 'Medium']]]].map(([row, cells]) => (
                <React.Fragment key={row}>
                  <div style={{ fontSize: 9, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px 4px' }}>{row}</div>
                  {cells.map(([bg, , label], ci) => <div key={ci} style={{ background: bg, borderRadius: 4, padding: '6px 4px', textAlign: 'center', fontSize: 9, color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>)}
                </React.Fragment>
              ))}
            </div>
          </Card>
          <Card>
            <CardTitle>Mitigation log</CardTitle>
            {[['teal', 'Scope change approval process added'], ['teal', 'Backup vendor identified for API'], ['amber', 'Budget buffer of 10% reserved'], ['gray', 'Succession plan drafted for key dev']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                <Badge color={c}>{c === 'teal' ? 'Done' : c === 'amber' ? 'In Progress' : 'Planned'}</Badge>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              </div>
            ))}
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export function ChangeRequests() {
  return (
    <Grid cols={2} gap={14}>
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}><Btn primary>+ New Change Request</Btn><Btn>Export</Btn></div>
        {[{ id: 'CR-007', title: 'Add WhatsApp notification module', status: 'amber', statusLabel: 'Under Review', body: 'Client requests WhatsApp alerts for all milestone completions. Est. +40h dev effort. Cost: ₹80,000.', by: 'Sales', date: 'Nov 14', actions: true }, { id: 'CR-006', title: 'Extend Phase 2 by 2 weeks', status: 'teal', statusLabel: 'Approved', body: 'Development timeline extended due to API vendor delay. No additional cost.', by: 'Dev', date: 'Nov 10', actions: false }, { id: 'CR-005', title: 'Remove legacy CSV export', status: 'red', statusLabel: 'Rejected', body: 'Requested removal of CSV export. Rejected — required by Operations for monthly reporting.', by: 'Dev', date: 'Oct 28', actions: false }].map(cr => (
          <div key={cr.id} style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 14, marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>{cr.id} — {cr.title}</span>
              <Badge color={cr.status}>{cr.statusLabel}</Badge>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 8 }}>{cr.body}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Badge color="blue">By: {cr.by}</Badge>
              <Badge color="gray">{cr.date}</Badge>
              {cr.actions && <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                <Btn small primary>Approve</Btn>
                <Btn small danger>Reject</Btn>
                <Btn small>Request Info</Btn>
              </div>}
            </div>
          </div>
        ))}
      </div>
      <div>
        <Card style={{ marginBottom: 14 }}>
          <CardTitle>New change request</CardTitle>
          <FormGroup label="CR title"><input type="text" placeholder="Brief title..." /></FormGroup>
          <FormGroup label="Impact level"><select><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></FormGroup>
          <Grid cols={2} gap={8}>
            <FormGroup label="Effort (hours)"><input type="text" placeholder="Est. hours..." /></FormGroup>
            <FormGroup label="Cost impact (₹)"><input type="text" placeholder="Additional cost..." /></FormGroup>
          </Grid>
          <FormGroup label="Justification"><textarea rows={3} placeholder="Why is this change needed?" /></FormGroup>
          <Btn primary style={{ width: '100%' }}>Submit for Approval</Btn>
        </Card>
        <Card>
          <CardTitle>CR summary</CardTitle>
          {[['Total CRs raised', '7', null], ['Approved', '4', 'var(--teal)'], ['Under review', '1', 'var(--amber)'], ['Rejected', '2', 'var(--red)']].map(([l, v, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
              <strong style={{ fontSize: 14, fontWeight: 600, color: c || 'var(--text-primary)' }}>{v}</strong>
            </div>
          ))}
        </Card>
      </div>
    </Grid>
  );
}
