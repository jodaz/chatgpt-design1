import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">
          Chat GPT
        </h1>
        <p className="leading-normal text-zinc-400">
          Ver 4.0 Mar 14
        </p>
        <p className="leading-normal text-zinc-900">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          with function calling to mix both text with generative UI responses
          from Gemini. The UI state is synced through the AI SDK so the model is
          always aware of your stateful interactions as they happen in the
          browser.
        </p>
      </div>
    </div>
  )
}
