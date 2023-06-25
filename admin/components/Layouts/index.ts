import { Layout as _default } from './Layout.default'
import { Layout as headlessCms } from './Layout.headless-cms'

export const Layouts = {
	'headless-cms': headlessCms,
	'default': _default,
} as const

export const layoutTypeList = Object.keys(Layouts) as ReadonlyArray<keyof typeof Layouts>

export type LayoutType = typeof layoutTypeList[number]
