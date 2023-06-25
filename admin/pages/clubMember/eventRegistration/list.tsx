import * as React from 'react'
import { BooleanCell, DataGridScope, GenericCell, HasOneSelectCell, Link, LinkButton } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Event registrations
	</Title>
	<Slots.Actions>
		<LinkButton to="clubMember/eventRegistration/create">
			Create new event registration
		</LinkButton>
	</Slots.Actions>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="EventRegistration" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="clubMember/eventRegistration/detail(id: $entity.id)">
					Open detail
				</Link>
			</GenericCell>
			<HasOneSelectCell field="event" header="event" options="Event.id" />
			<HasOneSelectCell field="clubMember" header="clubMember" options="ClubMember.name" />
			<BooleanCell key="transportNeeded" field="transportNeeded" header="transportNeeded" />
		</DataGridScope>
	</Slots.ContentStack>
</>
