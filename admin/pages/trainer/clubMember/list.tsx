import * as React from 'react'
import { DataGridScope, GenericCell, Link, TextCell } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Club members
	</Title>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="ClubMember" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="trainer/clubMember/detail(id: $entity.id)">
					Open detail
				</Link>
			</GenericCell>
			<TextCell key="name" field="name" header="name" />
			<TextCell key="email" field="email" header="email" />
		</DataGridScope>
	</Slots.ContentStack>
</>
