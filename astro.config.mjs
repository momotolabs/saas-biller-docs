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
							label: 'Sucursales',
							items: [
								{
									label: 'Crear sucursal', slug: 'started/create-branch'
								},
								{
									label: 'Editar sucursal', slug: 'started/edit-branch'
								}, {
									label: 'Asignar/Desasignar sucursal', slug: 'started/asign-employe'
								},]
						},

						{
							label: 'Crear punto de venta', slug: 'started/create-pos'
						},
						{
							label: 'Editar punto de venta', slug: 'started/edit-pos'
						},
						{
							label: 'Crear producto', slug: 'started/create-product'
						}, {
							label: 'Editar producto', slug: 'started/editar-productos'
						},

					]
				},

				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
