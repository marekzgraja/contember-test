import * as React from 'react'
import { BooleanCell, DataGridScope, EnumCell, GenericCell, Link } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Events
	</Title>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="Event" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="clubMember/event/detail(id: $entity.id)">
					Open detail
				</Link>
			</GenericCell>
			<EnumCell
				options={{ race: 'race', training: 'training', trainingCamp: 'trainingCamp' }}
				key="type"
				field="type"
				header="type"
			/>
			<BooleanCell key="registrationClosed" field="registrationClosed" header="registrationClosed" />
		</DataGridScope>
	</Slots.ContentStack>
</>
