import * as React from 'react'
import { BooleanCell, DataGridScope, GenericCell, HasOneSelectCell, Link } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Event registrations
	</Title>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="EventRegistration" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="trainer/eventRegistration/detail(id: $entity.id)">
					Open detail
				</Link>
			</GenericCell>
			<HasOneSelectCell field="event" header="event" options="Event.id" />
			<HasOneSelectCell field="clubMember" header="clubMember" options="ClubMember.name" />
			<BooleanCell key="transportNeeded" field="transportNeeded" header="transportNeeded" />
		</DataGridScope>
	</Slots.ContentStack>
</>
