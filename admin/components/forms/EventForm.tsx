import * as React from 'react'
import { BlockEditor, CheckboxField, Component, SelectField, TextField } from '@contember/admin'

export const EventForm = Component(() => <>
	<SelectField
		field="type"
		label="type"
		required
		options={[{ value: 'race', label: 'race' }, { value: 'training', label: 'training' }, { value: 'trainingCamp', label: 'trainingCamp' }]}
		allowNull={false}
	/>
	<CheckboxField field="registrationClosed" label="registrationClosed" required defaultValue={false} />
	<TextField field="Name" label="Name" />
	<TextField field="Location" label="Location" />
	<BlockEditor field="Description.parts" label="Description" contentField="json" sortableBy="order" />
</>)
