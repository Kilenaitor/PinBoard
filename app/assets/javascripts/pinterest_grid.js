/*
    Pinterest Grid Plugin
    Copyright 2014 Mediademons
    @author smm 16/04/2014

    usage:

     $window.onload = function({

        $('#blog-landing').pinterest_grid({
            no_columns: 4
        });

    });


*/
(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            self.adjust_width($(window).width() < self.options.single_column_breakpoint);
        });
        
        $(window).resize();
        self.make_layout_change(self);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * (self.options.no_columns - 1)) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top_down = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = self.shortest($container); //(index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('r' + row);
            $this.attr("col", current_column);
            $this.addClass('c' + current_column);
            
            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top_down += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = current_column * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top_down
            });
        });

        this.tallest($container);
    };
    
    Plugin.prototype.adjust_width = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();
            columns = self.options.no_columns;

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * (self.options.no_columns - 1)) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top_down = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = $(this).attr('col');
            } else {
                current_column = 0;
            }

            if(index % columns === 0) {
                row++;
            }

            prevAll.each(function(index) {
                if(single_column_mode === false) {
                    if(row > 1 && $(this).hasClass('c' + current_column)) {
                        top_down += $(this).outerHeight() + self.options.padding_y;
                    }
                } else {
                    top_down += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = current_column * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top_down
            });
        });

        this.tallest($container);
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
        largest = 0;
        var paddingy = this.options.padding_y;
        for (var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c' + z).each(function () {
                temp_height += $(this).outerHeight() + paddingy;
            });
            column_heights[z] = temp_height;
        }
        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + this.options.margin_bottom);
    };
    
    Plugin.prototype.shortest = function (_container) {
        var column_heights = [],
        shortest = 0;
        //
        var paddingy = this.options.padding_y;
        for (var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c' + z).each(function() {
                temp_height += $(this).outerHeight() + paddingy;
            });
            column_heights[z] = temp_height;
            //console.log(temp_height);
        }
        shortest = Math.min.apply(Math, column_heights);
        return column_heights.indexOf(shortest);
    };
    
    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
