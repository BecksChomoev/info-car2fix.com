// The CRM pipeline (v1). One board for both shops. Editing this list changes the
// board columns and the per-card stage dropdown everywhere.
export const STAGES = [
  { key: 'new', label: 'New' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'estimate_sent', label: 'Estimate Sent' },
  { key: 'scheduled', label: 'Scheduled' },
  { key: 'in_service', label: 'In Service' },
  { key: 'completed', label: 'Completed' },
  { key: 'lost', label: 'Lost' },
]

export const STAGE_KEYS = STAGES.map((s) => s.key)
export const STAGE_LABEL = Object.fromEntries(STAGES.map((s) => [s.key, s.label]))
