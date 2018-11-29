(function(window: any, document: any) {
	/**
     * The class of your plugin!
     *
     * @class Plugin
     */
    class Plugin {
		public static NAME: string = 'PLUGIN_NAME';

		private element: Element;
		private options: any;
		private defaults: any = {
            aDemoString: 'I love fries!'
		};

		/**
		 * Initializes a new instance of the plugin.
		 *
		 * @param element   The DOM element.
		 * @param options   Plugin options.
		 */
		constructor(element: Element, options: any) {
			this.element = element;

			// extend default options
			this.options = Object.assign(this.defaults, options);

			// init plugin
			this.init();
		}

		/**
         * Initialization
         *
         * @memberof Plugin
         */
        public init(): void {
            this.myFunction(this.options.aDemoString);
        }
        
        /**
         * Just a demo function, remove this!
         *
         * @param {string} param
         * @memberof Plugin
         */
        public myFunction(param: string): void {
            console.log(`The Typescript Boilerplate is online, baby!! Oh, and also: ${param}`);
        }
	}


	window['biotope']['components'] = window['biotope'].components || {};
	window['biotope'].components[Plugin.NAME] = (element: any, options: any) => {
		return new Plugin(element, options);
	};
})(window, document);