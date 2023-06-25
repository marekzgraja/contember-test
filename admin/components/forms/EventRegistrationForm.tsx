import * as React from 'react'
import { CheckboxField, Component, SelectField } from '@contember/admin'

export const EventRegistrationForm = Component(() => <>
	<SelectField field="event" label="event" options="Event.id" lazy required />
	<SelectField field="clubMember" label="clubMember" options="ClubMember.name" lazy required />
	<CheckboxField field="transportNeeded" label="transportNeeded" required />
</>)
