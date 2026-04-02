import React from 'react';

export const Badge = ({ children, color = 'accent', style }) => {
  const colors = {
    accent: { bg: 'var(--accent-soft)', color: '#a89cf7', border: 'var(--accent-border)' },
    teal:   { bg: 'var(--teal-soft)',   color: 'var(--teal)',  border: '#1a5040' },
    amber:  { bg: 'var(--amber-soft)',  color: 'var(--amber)', border: '#5a3a10' },
    red:    { bg: 'var(--red-soft)',    color: 'var(--red)',   border: '#5a2020' },
    blue:   { bg: 'var(--blue-soft)',   color: 'var(--blue)',  border: '#1a3a60' },
    green:  { bg: 'var(--green-soft)',  color: 'var(--green)', border: '#1a4025' },
    pink:   { bg: 'var(--pink-soft)',   color: 'var(--pink)',  border: '#5a1535' },
    gray:   { bg: '#1e1e28',           color: 'var(--text-secondary)', border: 'var(--border)' },
  };
  const c = colors[color] || colors.gray;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: '11px', fontWeight: 500, lineHeight: 1,
      padding: '3px 8px', borderRadius: '5px',
      background: c.bg, color: c.color,
      border: `1px solid ${c.border}`,
      ...style
    }}>{children}</span>
  );
};

export const Card = ({ children, style, className }) => (
  <div className={className} style={{
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)', padding: '16px', ...style
  }}>{children}</div>
);

export const CardTitle = ({ children, action }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>{children}</span>
    {action && <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{action}</span>}
  </div>
);

export const MetricCard = ({ label, value, sub, subColor }) => (
  <div style={{
    background: 'var(--bg-card2)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)', padding: '14px'
  }}>
    <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px', fontWeight: 500 }}>{label}</div>
    <div style={{ fontSize: '26px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{value}</div>
    {sub && <div style={{ fontSize: '11px', marginTop: '5px', color: subColor || 'var(--text-tertiary)' }}>{sub}</div>}
  </div>
);

export const Btn = ({ children, primary, danger, style, onClick, small }) => (
  <button onClick={onClick} style={{
    padding: small ? '5px 10px' : '8px 14px',
    fontSize: small ? '11px' : '12px',
    fontWeight: 500,
    borderRadius: 'var(--radius-sm)',
    background: primary ? 'var(--accent)' : danger ? 'var(--red-soft)' : 'var(--bg-hover)',
    color: primary ? '#fff' : danger ? 'var(--red)' : 'var(--text-secondary)',
    border: primary ? '1px solid var(--accent-border)' : danger ? '1px solid #5a2020' : '1px solid var(--border)',
    cursor: 'pointer',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
    ...style
  }} onMouseEnter={e => { if (!primary) e.currentTarget.style.background = '#2e2e42'; }} onMouseLeave={e => { if (!primary) e.currentTarget.style.background = primary ? 'var(--accent)' : danger ? 'var(--red-soft)' : 'var(--bg-hover)'; }}>{children}</button>
);

export const Avatar = ({ initials, color = 'accent', size = 32 }) => {
  const colors = { accent: ['var(--accent-soft)', '#a89cf7'], teal: ['var(--teal-soft)', 'var(--teal)'], amber: ['var(--amber-soft)', 'var(--amber)'], red: ['var(--red-soft)', 'var(--red)'], blue: ['var(--blue-soft)', 'var(--blue)'], green: ['var(--green-soft)', 'var(--green)'], pink: ['var(--pink-soft)', 'var(--pink)'] };
  const [bg, fg] = colors[color] || colors.accent;
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, border: `1px solid ${fg}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.32, fontWeight: 600, color: fg, flexShrink: 0, fontFamily: 'var(--mono)' }}>{initials}</div>
  );
};

export const ProgressBar = ({ label, value, color = 'var(--accent)', labelRight }) => (
  <div style={{ marginBottom: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
      <span>{label}</span><span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{labelRight || `${value}%`}</span>
    </div>
    <div style={{ height: '5px', background: 'var(--bg-hover)', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: '3px', transition: 'width 0.6s ease' }} />
    </div>
  </div>
);

export const FormGroup = ({ label, children }) => (
  <div style={{ marginBottom: '12px' }}>
    <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '5px', fontWeight: 500 }}>{label}</label>
    {children}
  </div>
);

export const TableRow = ({ cells, badges, last }) => (
  <tr style={{ borderBottom: last ? 'none' : '1px solid var(--border)' }}>
    {cells.map((cell, i) => (
      <td key={i} style={{ padding: '9px 10px', fontSize: '12px', color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', verticalAlign: 'middle' }}>
        {badges && badges[i] ? badges[i] : cell}
      </td>
    ))}
  </tr>
);

export const SectionDivider = ({ children }) => (
  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-tertiary)', textTransform: 'uppercase', padding: '14px 12px 4px', userSelect: 'none' }}>{children}</div>
);

export const Grid = ({ cols = 2, gap = 12, children, style }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap, ...style }}>{children}</div>
);

export const CheckRow = ({ done, children, badge }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }}>
    <div style={{ width: 15, height: 15, borderRadius: 4, background: done ? 'var(--teal-soft)' : 'transparent', border: `1px solid ${done ? 'var(--teal)' : 'var(--border-light)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {done && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>}
    </div>
    <span style={{ flex: 1, color: done ? 'var(--text-tertiary)' : 'var(--text-primary)', textDecoration: done ? 'line-through' : 'none' }}>{children}</span>
    {badge}
  </div>
);
