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
							label: 'Crear cuenta administrador', slug: 'started/create-account'
						},
						{
							label: 'Crear negocio', slug: 'started/create-business'
						},{
							label: 'Editar negocio', slug: 'started/editar-negocio'
						},
						{
							label: 'Dashboard del negocio', slug: 'started/business-dashboard'
						},{
							label: 'Configuraciones del negocio', slug: 'started/configuraciones-negocio'
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
							label: 'Puntos de venta',

							items: [
								{
									label: 'Crear punto de venta', slug: 'started/create-pos'
								},
								{
									label: 'Editar punto de venta', slug: 'started/edit-pos'
								},]
						},

						{
							label: 'Productos',

							items: [

								{
									label: 'Crear producto', slug: 'started/create-product'
								}, {


									label: 'Editar producto', slug: 'started/editar-productos'
								},]
						},

						{
							label: 'Empleados',

							items: [

								{
									label: 'Crear empleado', slug: 'started/crear-empleado'
								}, {
									label: 'Roles', slug: 'started/roles-empleados'
								}, {
									label: 'Editar empleado', slug: 'started/editar-empleado'
								},
							]
						},

						{
							label: 'Clientes',

							items: [

								{
									label: 'Tipos de cliente', slug: 'started/tipos-clientes'
								},{
									label: 'Crear clientes', slug: 'started/crear-clientes'
								},{
									label: 'Editar clientes', slug: 'started/editar-cliente'
								},{
									label: 'Eliminar clientes', slug: 'started/eliminar--cliente'
								},
							]
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
