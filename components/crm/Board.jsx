import { STAGES } from '@/lib/stages'
import StageColumn from './StageColumn'

export default function Board({ leads }) {
  const byStage = Object.fromEntries(STAGES.map((s) => [s.key, []]))
  for (const lead of leads) {
    if (!byStage[lead.stage]) byStage[lead.stage] = []
    byStage[lead.stage].push(lead)
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {STAGES.map((stage) => (
        <StageColumn key={stage.key} stage={stage} leads={byStage[stage.key] || []} />
      ))}
    </div>
  )
}
