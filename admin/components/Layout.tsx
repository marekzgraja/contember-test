import { Link, LogoutLink } from '@contember/admin'
import * as React from 'react'
import { useDirectives } from './Directives'
import { Layouts, LayoutType } from './Layouts'
import { Slots } from './Slots'
import { useDocumentTitle } from './useDocumentTitle.temporary'
import { Navigation } from './Navigation'
const layout = 'default' as LayoutType
const LayoutComponent = Layouts[layout] ?? Layouts.default

export const Layout = (props: React.PropsWithChildren) => {
	const directives = useDirectives()
	useDocumentTitle(directives.title)

	return (
		<>
			<Slots.Title>
				<h1>{directives.title}</h1>
			</Slots.Title>

			<Slots.Logo>
				<Link to="index">OrienteerHub</Link>
			</Slots.Logo>

			<Slots.Profile>
				<LogoutLink>Logout</LogoutLink>
			</Slots.Profile>

			<Slots.Navigation>
				<Navigation />
			</Slots.Navigation>

			<LayoutComponent>
				{props.children}
			</LayoutComponent>
		</>
	)
}
