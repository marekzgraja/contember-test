import * as React from 'react'
import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { EventForm } from '../../../components/forms/EventForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Edit event
	</Title>
	<EditScope entity="Event(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="trainer/event/detail(id: $entity.id)">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.ContentStack>
			<EventForm />
		</Slots.ContentStack>
	</EditScope>
</>
