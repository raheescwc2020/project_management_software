import React from 'react';
import { Card, CardTitle, MetricCard, Badge, ProgressBar, Grid, CheckRow } from '../components';

const risks = [
  { label: 'API integration delay — Dev', level: 'red' },
  { label: 'Client approval pending', level: 'amber' },
  { label: 'Missing design assets', level: 'amber' },
  { label: 'Vendor documentation incomplete', level: 'gray' },
];

export default function Dashboard() {
  return (
    <div>
      <Grid cols={4} gap={12} style={{ marginBottom: 16 }}>
        <MetricCard label="Active projects" value="12" sub="↑ 2 this month" subColor="var(--teal)" />
        <MetricCard label="Tasks completed" value="284" sub="76% on schedule" subColor="var(--teal)" />
        <MetricCard label="Blockers" value="5" sub="3 critical" subColor="var(--red)" />
        <MetricCard label="Budget used" value="62%" sub="Within target" subColor="var(--teal)" />
      </Grid>

      <Grid cols={2} gap={14}>
        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle action="Sprint 4 · 2 weeks left">Team progress by department</CardTitle>
            <ProgressBar label="Development" value={78} color="var(--accent)" />
            <ProgressBar label="Sales" value={90} color="var(--teal)" />
            <ProgressBar label="Marketing" value={55} color="var(--amber)" />
            <ProgressBar label="Operations" value={83} color="var(--blue)" />
            <ProgressBar label="Business Analyst" value={67} color="var(--pink)" />
          </Card>
          <Card>
            <CardTitle action="Project Horizon">Milestone Gantt</CardTitle>
            {[
              { label: 'Requirements', left: 0, width: 18, color: 'var(--accent)' },
              { label: 'UI/UX Design', left: 15, width: 18, color: 'var(--blue)' },
              { label: 'Development', left: 28, width: 38, color: 'var(--teal)' },
              { label: 'QA & Testing', left: 62, width: 18, color: 'var(--amber)' },
              { label: 'Go-Live', left: 88, width: 12, color: 'var(--green)' },
            ].map(g => (
              <div key={g.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                <div style={{ width: 90, fontSize: 11, color: 'var(--text-secondary)', flexShrink: 0 }}>{g.label}</div>
                <div style={{ flex: 1, height: 18, background: 'var(--bg-hover)', borderRadius: 4, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: `${g.left}%`, width: `${g.width}%`, height: '100%', background: g.color, borderRadius: 4, opacity: 0.85, display: 'flex', alignItems: 'center', paddingLeft: 6 }}>
                    <span style={{ fontSize: 9, color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>{g.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        <div>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Risk &amp; Blockers</CardTitle>
            {risks.map(r => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 12 }}>
                <Badge color={r.level}>{r.level === 'red' ? 'Critical' : r.level === 'amber' ? 'High' : 'Low'}</Badge>
                <span style={{ color: 'var(--text-secondary)' }}>{r.label}</span>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 14 }}>
            <CardTitle>Pending Approvals</CardTitle>
            <CheckRow badge={<Badge color="accent">PM</Badge>}>Phase 2 budget sign-off</CheckRow>
            <CheckRow badge={<Badge color="blue">Sales</Badge>}>Client comms Q3 report</CheckRow>
            <CheckRow done badge={<Badge color="teal">Done</Badge>}>Design prototype review</CheckRow>
          </Card>
          <Card>
            <CardTitle>Sprint velocity</CardTitle>
            {['Sprint 1','Sprint 2','Sprint 3','Sprint 4'].map((sp, i) => {
              const vals = [72, 68, 85, 78];
              return <ProgressBar key={sp} label={sp} value={vals[i]} color={i === 3 ? 'var(--accent)' : 'var(--blue)'} />;
            })}
          </Card>
        </div>
      </Grid>
    </div>
  );
}
