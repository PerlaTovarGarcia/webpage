const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

  /** Plugins */
  .scripts(
    [
      'resources/js/vendor/plugins/table_gear/plugins_table_gear.js',
      'resources/js/vendor/plugins/table_gear/table_gear.js',
      'resources/js/vendor/plugins/search-by-autocomplete.js',
      'resources/js/vendor/plugins/moment/moment.js',
      'node_modules/flatpickr/dist/flatpickr.min.js',
      'resources/js/util/flatpickr.js',
    ],
    'public/js/plugins.all.js',
  )

  .styles(
    [
      'resources/css/app.css',
      'node_modules/flatpickr/dist/flatpickr.css',
      'resources/css/vendor/plugins/table_gear/table_gear.css',
      'resources/css/vendor/plugins/table_gear/plugins_table_tech.css',
      'resources/css/vendor/plugins/icheck/all.css',
    ],
    'public/css/plugins.all.css',
  )

  /** Modules Scripts */
  .scripts(
    [
      'resources/js/modules/users/list.js',
      'resources/js/modules/users/create.js',
      'resources/js/modules/users/update.js',
      'resources/js/modules/users/status.js',
      'resources/js/modules/users/assign.js',
    ],
    'public/js/modules/users/all.js',
  )

  .scripts(
    [
      'resources/js/modules/permissions/permissions-assign.js',
      'resources/js/modules/permissions/roles-list.js',
      'resources/js/modules/permissions/roles-create.js',
      'resources/js/modules/permissions/roles-update.js',
    ],
    'public/js/modules/permissions/roles-all.js',
  )

  .scripts(
    [
      'resources/js/modules/permissions/permissions-list.js',
      'resources/js/modules/permissions/permissions-create.js',
      'resources/js/modules/permissions/permissions-update.js',
    ],
    'public/js/modules/permissions/permissions-all.js',
  )

  .scripts(
    [
      'resources/js/modules/stores/list.js',
      'resources/js/modules/stores/create.js',
      'resources/js/modules/stores/update.js',
      'resources/js/modules/stores/status.js',
      'resources/js/modules/stores/schedule.js',
    ],
    'public/js/modules/stores/all.js',
  )
  .scripts(
    [
      'resources/js/modules/menus/toppings/list.js',
      'resources/js/modules/menus/toppings/create.js',
      'resources/js/modules/menus/toppings/update.js',
      'resources/js/modules/menus/toppings/status.js',
      'resources/js/modules/menus/toppings/schedule.js',
    ],
    'public/js/modules/menus/toppings/all.js',
  )
  .scripts(
    [
      'resources/js/modules/menus/categories/list.js',
      'resources/js/modules/menus/categories/create.js',
      'resources/js/modules/menus/categories/update.js',
      'resources/js/modules/menus/categories/status.js',
      'resources/js/modules/menus/categories/schedule.js',
    ],
    'public/js/modules/menus/categories/all.js',
  )