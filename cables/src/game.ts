import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import Cables, { Props } from './item'

const cables = new Cables()
const spawner = new Spawner<Props>(cables)

spawner.spawn(
  'cables',
  new Transform({
	position: new Vector3(4, 2, 8),
	rotation: Quaternion.Euler(90, 0, 0)
  }),
  { greenCable: true, 
	blueCable: true,
	redCable: true,
	onClick: [{ entityName: 'cables', actionId: 'toggleBox', values: {} }],
	onRedCut: [{ entityName: 'cables', actionId: 'closeBox', values: {} }],
	onGreenCut: null,
	onBlueCut: null,
	onBoxOpen: null,
	onBoxClose: null,
  }
)