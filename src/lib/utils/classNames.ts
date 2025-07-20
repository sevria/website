import { twJoin } from 'tailwind-merge';

export const focusable = twJoin(
	'ring-offset-background ring-0 outline-none',
	'focus-visible:ring-border-primary focus-visible:ring-2 focus-visible:ring-offset-2'
);

export const prose = twJoin(
	'prose prose-lg pb-12 pt-2',
	'prose-headings:font-bold prose-headings:mb-5 prose-headings:mt-10',
	'prose-h1:text-4xl prose-h2:text-3xl',
	'prose-p:mb-6 prose-p:mt-0',
	'prose-ul:mb-6 prose-ul:mt-0',
	'prose-li:mb-2 prose-li:mt-0'
);
