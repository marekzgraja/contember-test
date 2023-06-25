import * as React from 'react'
import { BooleanCell, DataGridScope, DeleteEntityButton, EnumCell, GenericCell, Link, LinkButton } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Events
	</Title>
	<Slots.Actions>
		<LinkButton to="admin/event/create">
			Create new event
		</LinkButton>
	</Slots.Actions>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="Event" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="admin/event/detail(id: $entity.id)">
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
			<GenericCell shrunk canBeHidden={false}>
				<DeleteEntityButton immediatePersist />
			</GenericCell>
		</DataGridScope>
	</Slots.ContentStack>
</>
