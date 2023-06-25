import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, Link, LinkButton, TextCell } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Club members
	</Title>
	<Slots.Actions>
		<LinkButton to="admin/clubMember/create">
			Create new club member
		</LinkButton>
	</Slots.Actions>
	<Directive name="content-max-width" content={null} />
	<Slots.ContentStack>
		<DataGridScope entities="ClubMember" itemsPerPage={50}>
			<GenericCell shrunk canBeHidden={false}>
				<Link to="admin/clubMember/detail(id: $entity.id)">
					Open detail
				</Link>
			</GenericCell>
			<TextCell key="name" field="name" header="name" />
			<TextCell key="email" field="email" header="email" />
			<GenericCell shrunk canBeHidden={false}>
				<DeleteEntityButton immediatePersist />
			</GenericCell>
		</DataGridScope>
	</Slots.ContentStack>
</>
