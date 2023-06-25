import * as React from 'react'
import { CheckboxField, Component, HiddenField, TextField } from '@contember/admin'

export const ClubMemberForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="name" required />
	<TextField field="email" label="email" required />
	<TextField field="phoneNumber" label="phoneNumber" />
	<CheckboxField field="transportPreference" label="transportPreference" />
</>)
