// Provides TypeScript support for any web components that add themselves to HTMLElementTagNameMap.
// Custom elements must contain a hyphen per the web component spec.

type CustomElementProps<T> = Partial<T & DOMAttributes<T> & { children: unknown }>;

type CustomElements = {
	[K in keyof HTMLElementTagNameMap as K extends `${string}-${string}` ? K : never]: CustomElementProps<
		HTMLElementTagNameMap[K]
	>;
};

declare global {
	namespace JSX {
		interface IntrinsicElements extends CustomElements {}
	}
}

export {};
