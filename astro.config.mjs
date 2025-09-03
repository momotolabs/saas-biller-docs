// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Biller Momotolabs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '¿Cómo empezar?',
					items: [
						{
							label: 'Crear cuenta', slug: 'started/create-account'
						},
						{
							label: 'Crear negocio', slug: 'started/create-business'
						},
						{
							label: 'Dashboard del negocio', slug: 'started/business-dashboard'
						},
						{
							label: 'Crear sucursal', slug: 'started/create-branch'
						},
						{
							label: 'Editar sucursal', slug: 'started/edit-branch'
						},
						{
							label: 'Crear punto de venta', slug: 'started/create-pos'
						},
						{
							label: 'Editar punto de venta', slug: 'started/edit-pos'
						},
						{
							label: 'Crear producto', slug: 'started/create-product'
						},
					]
				},
				{
					label: 'Guias',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '¿Cómo crear una factura de consumidor final?', slug: 'guides/create-fe' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
