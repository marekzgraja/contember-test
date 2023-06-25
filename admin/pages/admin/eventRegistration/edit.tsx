import * as React from 'react'
import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { EventRegistrationForm } from '../../../components/forms/EventRegistrationForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Edit event registration
	</Title>
	<EditScope entity="EventRegistration(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="admin/eventRegistration/detail(id: $entity.id)">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.ContentStack>
			<EventRegistrationForm />
		</Slots.ContentStack>
	</EditScope>
</>
