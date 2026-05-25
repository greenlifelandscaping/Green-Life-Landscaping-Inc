'use client';

import { useEffect, useRef, useState } from 'react';
import { User, Phone, Mail, Wrench, MessageSquare, ArrowRight, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES, SITE } from '@/lib/constants';

declare global {
  interface Window {
    google?: {
      maps?: {
        importLibrary: (name: string) => Promise<PlacesLibrary>;
      };
    };
  }
}

type PlacePrediction = {
  placeId: string;
  mainText?: { text: string };
  secondaryText?: { text: string };
  text?: { text: string };
  toPlace: () => GooglePlace;
};

type GooglePlace = {
  fetchFields: (opts: { fields: string[] }) => Promise<void>;
  formattedAddress?: string;
};

type AutocompleteSuggestionResult = { placePrediction: PlacePrediction | null };

type PlacesLibrary = {
  AutocompleteSuggestion: {
    fetchAutocompleteSuggestions: (req: {
      input: string;
      includedRegionCodes?: string[];
      includedPrimaryTypes?: string[];
      sessionToken?: unknown;
    }) => Promise<{ suggestions: AutocompleteSuggestionResult[] }>;
  };
  AutocompleteSessionToken: new () => unknown;
};

type Suggestion = {
  placeId: string;
  primary: string;
  secondary: string;
  prediction: PlacePrediction;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  showInfoPanel?: boolean;
  compact?: boolean;
};

export function ContactForm({
  title = 'Request a free estimate',
  subtitle = 'Tell us about your project — we’ll respond within one business day.',
  showInfoPanel = true,
  compact = false,
}: ContactFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      email: String(data.get('email') ?? ''),
      address: String(data.get('address') ?? ''),
      service: String(data.get('service') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''),
    };

    setState('submitting');
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Record<string, string>;
      };

      if (!res.ok || body.ok === false) {
        setState('error');
        setErrorMessage(
          body.error ?? 'We couldn’t send your request. Please call us instead.'
        );
        setFieldErrors(body.errors ?? {});
        return;
      }

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMessage(
        'Network error — please check your connection or call us at ' + SITE.phone + '.'
      );
    }
  }

  return (
    <section
      id="estimate-form"
      className={`${compact ? 'bg-white' : 'bg-white section-pad'} scroll-mt-24 lg:scroll-mt-[120px]`}
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div
          className={`grid ${
            showInfoPanel ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-1 max-w-2xl mx-auto'
          } gap-10 lg:gap-14`}
        >
          <div>
            {!compact && (
              <span className="inline-block font-display font-bold text-overline uppercase text-neutral-400 mb-3">
                Get in touch
              </span>
            )}
            <h2
              id="contact-heading"
              className="font-display font-bold text-h2 text-neutral-900 mb-3"
            >
              {title}
            </h2>
            <p className="font-body text-body text-neutral-600 mb-8">{subtitle}</p>

            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              {/* Honeypot — hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Full name"
                  icon={User}
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Doe"
                  error={fieldErrors.name}
                />
                <Field
                  id="phone"
                  label="Phone"
                  icon={Phone}
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="(410) 555-0100"
                  error={fieldErrors.phone}
                />
              </div>
              <Field
                id="email"
                label="Email"
                icon={Mail}
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                error={fieldErrors.email}
              />

              <AddressAutocomplete error={fieldErrors.address} />

              <div>
                <label
                  htmlFor="service"
                  className="block font-display font-semibold text-[11px] tracking-[0.04em] uppercase text-neutral-700 mb-2"
                >
                  Service interested in
                </label>
                <div className="relative">
                  <Wrench
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                  />
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full font-body text-[14px] border-[1.5px] border-neutral-200 rounded-md pl-9 pr-3 py-2.5 bg-white text-neutral-900 focus:border-brand-primary focus:outline-none focus:ring-[3px] focus:ring-brand-primary/10 transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Choose a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="multiple">Multiple services / not sure</option>
                  </select>
                </div>
                {fieldErrors.service && (
                  <p className="mt-1.5 font-body text-[12px] text-red-700">{fieldErrors.service}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-display font-semibold text-[11px] tracking-[0.04em] uppercase text-neutral-700 mb-2"
                >
                  Tell us about your project
                </label>
                <div className="relative">
                  <MessageSquare
                    size={14}
                    className="absolute left-3 top-3 text-neutral-400 pointer-events-none"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Property size, what you’d like done, timing, anything we should know…"
                    className="w-full font-body text-[14px] border-[1.5px] border-neutral-200 rounded-md pl-9 pr-3 py-2.5 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-brand-primary focus:outline-none focus:ring-[3px] focus:ring-brand-primary/10 transition-all resize-y"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={state === 'submitting'}
                  aria-label="Submit free estimate request"
                >
                  {state === 'submitting' ? (
                    'Sending…'
                  ) : (
                    <>
                      Request free estimate
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </>
                  )}
                </Button>
                {state === 'success' && (
                  <p
                    role="status"
                    className="mt-4 px-4 py-3 rounded-md bg-surface-alt text-green-900 font-body text-[14px]"
                  >
                    Thanks — we got your request. Expect a call or email within one business day.
                  </p>
                )}
                {state === 'error' && (
                  <p
                    role="alert"
                    className="mt-4 px-4 py-3 rounded-md bg-red-50 text-red-800 font-body text-[14px] border border-red-100"
                  >
                    {errorMessage ?? 'Something went wrong. Please try again or call us directly.'}
                  </p>
                )}
                <p className="mt-3 font-body text-[12px] text-neutral-500">
                  We’ll never share your info. By submitting, you agree we may contact you about
                  your free estimate.
                </p>
              </div>
            </form>
          </div>

          {showInfoPanel && (
            <aside className="lg:pl-6">
              <div className="bg-brand-dark text-white rounded-xl p-8 shadow-card-hover">
                <h3 className="font-display font-bold text-h4 mb-6">Or reach us directly</h3>

                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-9 w-9 rounded-md bg-white/10 flex items-center justify-center text-brand-accent">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[11px] tracking-[0.08em] uppercase text-white/60 mb-1">
                        Phone
                      </div>
                      <a
                        href={SITE.phoneHref}
                        className="font-body text-[15px] text-white hover:text-brand-accent transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-9 w-9 rounded-md bg-white/10 flex items-center justify-center text-brand-accent">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[11px] tracking-[0.08em] uppercase text-white/60 mb-1">
                        Email
                      </div>
                      <a
                        href={SITE.emailHref}
                        className="font-body text-[15px] text-white hover:text-brand-accent transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-9 w-9 rounded-md bg-white/10 flex items-center justify-center text-brand-accent">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[11px] tracking-[0.08em] uppercase text-white/60 mb-1">
                        Service area
                      </div>
                      <p className="font-body text-[14px] text-white/85 leading-[1.55]">
                        {SITE.serviceArea.slice(0, 6).join(', ')}, and surrounding Maryland
                        communities
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-9 w-9 rounded-md bg-white/10 flex items-center justify-center text-brand-accent">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-[11px] tracking-[0.08em] uppercase text-white/60 mb-1">
                        Hours
                      </div>
                      <p className="font-body text-[14px] text-white/85">{SITE.hours}</p>
                      <p className="font-body text-[12px] text-white/55 mt-1">
                        24/7 storm response for active clients
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-7 pt-6 border-t border-white/10">
                  <div className="font-display font-semibold text-[11px] tracking-[0.08em] uppercase text-white/60 mb-2">
                    Licensed &amp; Insured
                  </div>
                  <p className="font-body text-[13px] text-white/80">
                    {SITE.license} · $2M liability · workers’ comp on all crews
                  </p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({
  id,
  label,
  icon: Icon,
  type = 'text',
  placeholder,
  required,
  autoComplete,
  error,
}: FieldProps) {
  const borderClass = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
    : 'border-neutral-200 focus:border-brand-primary focus:ring-brand-primary/10';
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-display font-semibold text-[11px] tracking-[0.04em] uppercase text-neutral-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        />
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full font-body text-[14px] border-[1.5px] rounded-md pl-9 pr-3 py-2.5 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-[3px] transition-all ${borderClass}`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-body text-[12px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function AddressAutocomplete({ error }: { error?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionTokenRef = useRef<unknown>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(-1);

  // Just kick off Maps JS loading on mount; we resolve the library lazily
  // inside fetchSuggestions so we don't depend on script.onload timing.
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return;
    if (typeof window === 'undefined') return;
    if (window.google?.maps?.importLibrary) return;
    if (document.getElementById('google-maps-script')) return;

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async&v=weekly`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  async function fetchSuggestions(query: string) {
    if (query.trim().length < 3) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }
    try {
      const deadline = Date.now() + 8000;
      while (!window.google?.maps?.importLibrary && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 100));
      }
      if (!window.google?.maps?.importLibrary) {
        console.warn('[address autocomplete] Google Maps did not load');
        return;
      }
      const lib = await window.google.maps.importLibrary('places');
      if (!sessionTokenRef.current) {
        sessionTokenRef.current = new lib.AutocompleteSessionToken();
      }
      const { suggestions: results } = await lib.AutocompleteSuggestion.fetchAutocompleteSuggestions({
        input: query,
        includedRegionCodes: ['us'],
        includedPrimaryTypes: ['street_address', 'premise', 'subpremise'],
        sessionToken: sessionTokenRef.current,
      });
      const mapped: Suggestion[] = (results ?? [])
        .filter((r): r is { placePrediction: PlacePrediction } => Boolean(r.placePrediction))
        .slice(0, 5)
        .map((r) => ({
          placeId: r.placePrediction.placeId,
          primary: r.placePrediction.mainText?.text ?? r.placePrediction.text?.text ?? '',
          secondary: r.placePrediction.secondaryText?.text ?? '',
          prediction: r.placePrediction,
        }));
      setSuggestions(mapped);
      setIsOpen(mapped.length > 0);
      setHighlightedIdx(-1);
    } catch (err) {
      console.error('Autocomplete fetch failed', err);
      setSuggestions([]);
      setIsOpen(false);
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 250);
  }

  async function selectSuggestion(s: Suggestion) {
    try {
      const place = s.prediction.toPlace();
      await place.fetchFields({ fields: ['formattedAddress'] });
      if (inputRef.current) {
        inputRef.current.value = place.formattedAddress ?? `${s.primary} ${s.secondary}`.trim();
      }
    } catch (err) {
      console.error('Place fetch failed', err);
      if (inputRef.current) {
        inputRef.current.value = `${s.primary} ${s.secondary}`.trim();
      }
    } finally {
      setSuggestions([]);
      setIsOpen(false);
      // Refresh session token for the next billing session.
      if (window.google?.maps?.importLibrary) {
        try {
          const lib = await window.google.maps.importLibrary('places');
          sessionTokenRef.current = new lib.AutocompleteSessionToken();
        } catch {
          // ignore — token will lazy-init on next fetch
        }
      }
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && highlightedIdx >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[highlightedIdx]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  const borderClass = error
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
    : 'border-neutral-200 focus:border-brand-primary focus:ring-brand-primary/10';

  return (
    <div>
      <label
        htmlFor="address"
        className="block font-display font-semibold text-[11px] tracking-[0.04em] uppercase text-neutral-700 mb-2"
      >
        Property address
      </label>
      <div className="relative">
        <MapPin
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10"
        />
        <input
          ref={inputRef}
          id="address"
          name="address"
          type="text"
          placeholder="Start typing your address…"
          required
          autoComplete="off"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          aria-invalid={Boolean(error)}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-describedby={error ? 'address-error' : undefined}
          className={`w-full font-body text-[14px] border-[1.5px] rounded-md pl-9 pr-3 py-2.5 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-[3px] transition-all ${borderClass}`}
        />
        {isOpen && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute z-20 left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg max-h-72 overflow-auto"
          >
            {suggestions.map((s, i) => (
              <li
                key={s.placeId || i}
                role="option"
                aria-selected={i === highlightedIdx}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectSuggestion(s);
                }}
                onMouseEnter={() => setHighlightedIdx(i)}
                className={`px-3 py-2.5 cursor-pointer border-b border-neutral-100 last:border-b-0 ${
                  i === highlightedIdx ? 'bg-surface-alt' : ''
                }`}
              >
                <div className="font-display font-semibold text-[13.5px] text-neutral-900">{s.primary}</div>
                {s.secondary && (
                  <div className="font-body text-[12px] text-neutral-500 mt-0.5">{s.secondary}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && (
        <p id="address-error" className="mt-1.5 font-body text-[12px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
