import * as React from 'react'
import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { EventForm } from '../../../components/forms/EventForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Create event
	</Title>
	<CreateScope entity="Event" redirectOnSuccess="admin/event/detail(id: $entity.id)">
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.Back>
			<NavigateBackLink to="admin/event/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.ContentStack>
			<EventForm />
		</Slots.ContentStack>
	</CreateScope>
</>
