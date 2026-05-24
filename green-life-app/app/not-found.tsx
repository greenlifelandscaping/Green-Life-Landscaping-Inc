import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-surface-base flex items-center justify-center min-h-[60vh]">
      <div className="container-page text-center py-20">
        <div className="font-display font-extrabold text-brand-primary text-[80px] leading-none mb-2">
          404
        </div>
        <h1 className="font-display font-bold text-h2 text-neutral-900 mb-4">
          That page must have wandered off
        </h1>
        <p className="font-body text-body text-neutral-600 max-w-md mx-auto mb-8">
          The page you’re looking for isn’t here. Head back to the homepage or check our
          services list.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">Back to homepage</Button>
          <Button href="/services" variant="secondary">
            Browse services
          </Button>
        </div>
      </div>
    </section>
  );
}
