// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../cargoboox/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '../cargoboox/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../cargoboox/libs/jquery/flot/jquery.flot.js',
                          '../cargoboox/libs/jquery/flot/jquery.flot.pie.js', 
                          '../cargoboox/libs/jquery/flot/jquery.flot.resize.js',
                          '../cargoboox/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                          '../cargoboox/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
                          '../cargoboox/libs/jquery/flot-spline/js/jquery.flot.spline.min.js'],
      moment:         [   '../cargoboox/libs/jquery/moment/moment.js'],
      screenfull:     [   '../cargoboox/libs/jquery/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../cargoboox/libs/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../cargoboox/libs/jquery/html5sortable/jquery.sortable.js'],
      nestable:       [   '../cargoboox/libs/jquery/nestable/jquery.nestable.js',
                          '../cargoboox/libs/jquery/nestable/jquery.nestable.css'],
      filestyle:      [   '../cargoboox/libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../cargoboox/libs/jquery/bootstrap-slider/bootstrap-slider.js',
                          '../cargoboox/libs/jquery/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../cargoboox/libs/jquery/chosen/chosen.jquery.min.js',
                          '../cargoboox/libs/jquery/chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../cargoboox/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../cargoboox/libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '../cargoboox/libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../cargoboox/libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../cargoboox/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                          '../cargoboox/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../cargoboox/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../cargoboox/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../cargoboox/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../cargoboox/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../cargoboox/libs/jquery/bower-jvectormap/jquery-jvectormap.css'],
      footable:       [   '../cargoboox/libs/jquery/footable/dist/footable.all.min.js',
                          '../cargoboox/libs/jquery/footable/css/footable.core.css'],
      fullcalendar:   [   '../cargoboox/libs/jquery/moment/moment.js',
                          '../cargoboox/libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                          '../cargoboox/libs/jquery/fullcalendar/dist/fullcalendar.css',
                          '../cargoboox/libs/jquery/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../cargoboox/libs/jquery/moment/moment.js',
                          '../cargoboox/libs/jquery/bootstrap-daterangepicker/daterangepicker.js',
                          '../cargoboox/libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../cargoboox/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../cargoboox/libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  .constant('MODULE_CONFIG', [
      {
          name: 'ngGrid',
          files: [
              '../cargoboox/libs/angular/ng-grid/build/ng-grid.min.js',
              '../cargoboox/libs/angular/ng-grid/ng-grid.min.css',
              '../cargoboox/libs/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          files: [
              '../cargoboox/libs/angular/angular-ui-grid/ui-grid.min.js',
              '../cargoboox/libs/angular/angular-ui-grid/ui-grid.min.css',
              '../cargoboox/libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.select',
          files: [
              '../cargoboox/libs/angular/angular-ui-select/dist/select.min.js',
              '../cargoboox/libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name:'angularFileUpload',
          files: [
            '../cargoboox/libs/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name:'ui.calendar',
          files: ['../cargoboox/libs/angular/angular-ui-calendar/src/calendar.js']
      },
      {
          name: 'ngImgCrop',
          files: [
              '../cargoboox/libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              '../cargoboox/libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          files: [
              '../cargoboox/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              '../cargoboox/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'toaster',
          files: [
              '../cargoboox/libs/angular/angularjs-toaster/toaster.js',
              '../cargoboox/libs/angular/angularjs-toaster/toaster.css'
          ]
      },
      {
          name: 'textAngular',
          files: [
              '../cargoboox/libs/angular/textAngular/dist/textAngular-sanitize.min.js',
              '../cargoboox/libs/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          files: [
              '../cargoboox/libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              '../cargoboox/libs/angular/venturocket-angular-slider/build/angular-slider.css'
          ]
      },
      {
          name: 'com.2fdevs.videogular',
          files: [
              '../cargoboox/libs/angular/videogular/videogular.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.controls',
          files: [
              '../cargoboox/libs/angular/videogular-controls/controls.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.buffering',
          files: [
              '../cargoboox/libs/angular/videogular-buffering/buffering.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.overlayplay',
          files: [
              '../cargoboox/libs/angular/videogular-overlay-play/overlay-play.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.poster',
          files: [
              ' ../cargoboox/libs/angular/videogular-poster/poster.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.imaads',
          files: [
              '../cargoboox/libs/angular/videogular-ima-ads/ima-ads.min.js'
          ]
      },
      {
          name: 'xeditable',
          files: [
              '../cargoboox/libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              '../cargoboox/libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          files: [
              '../cargoboox/libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'angular-skycons',
          files: [
              '../cargoboox/libs/angular/angular-skycons/angular-skycons.js'
          ]
      }
    ]
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: MODULE_CONFIG
      });
  }])
;
