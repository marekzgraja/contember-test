import * as React from 'react'
import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { EventRegistrationForm } from '../../../components/forms/EventRegistrationForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Create event registration
	</Title>
	<CreateScope entity="EventRegistration" redirectOnSuccess="clubMember/eventRegistration/detail(id: $entity.id)">
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.Back>
			<NavigateBackLink to="clubMember/eventRegistration/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.ContentStack>
			<EventRegistrationForm />
		</Slots.ContentStack>
	</CreateScope>
</>
