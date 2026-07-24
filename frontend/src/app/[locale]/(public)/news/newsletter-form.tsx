'use client';

/**
 * Newsletter subscription form — Client Component.
 * Extracted from news/page.tsx to avoid "event handlers in Server Component" error.
 */
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useTranslations } from 'next-intl';

export function NewsletterForm() {
  const tBlog = useTranslations('Blog');

  return (
    <form
      className="mx-auto flex w-full max-w-md items-center space-x-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        required
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-none border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={tBlog('newsletter_placeholder')}
        type="email"
      />
      <Button type="submit">
        {tBlog('subscribe')}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
