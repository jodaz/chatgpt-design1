import * as React from 'react'
import type { AI } from '@/lib/chat/actions'
import { useActions, useUIState } from 'ai/rsc'
import {
  IconExclamationTriangle,
  IconSparkles,
  IconStar
} from '@/components/ui/icons'
import { nanoid } from 'nanoid'
import { UserMessage } from './stocks/message'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const exampleMessages = [
    {
      icon: <IconSparkles />,
      heading: 'Examples',
      subheading: 'Explain quantum computing in simple terms →',
      message: ``
    },
    {
      heading: 'Capabilities',
      subheading: 'Remembers what user said earlier in the conversation',
      message: '',
      icon: <IconStar />
    },
    {
      heading: 'Limitations',
      subheading: 'May occasionally generate incorrect information',
      message: '',
      icon: <IconExclamationTriangle />
    }
]

export function MessagesGroup() {
    const [messages, setMessages] = useUIState<typeof AI>()
    const { submitUserMessage } = useActions()

    return (
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="mb-4 grid sm:grid-cols-3 gap-2 sm:gap-4 px-4 sm:px-0">
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={cn(
                  'cursor-pointer bg-white-0 text-zinc-950 rounded-2xl p-4 sm:p-6 hover:bg-zinc-100 transition-colors border-2 border-solid border-zinc-200',
                  index > 1 && 'hidden md:block'
                )}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.message}</UserMessage>
                    }
                  ])

                  try {
                    const responseMessage = await submitUserMessage(
                      example.message
                    )

                    setMessages(currentMessages => [
                      ...currentMessages,
                      responseMessage
                    ])
                  } catch {
                    toast(
                      <div className="text-red-600">
                        You have reached your message limit! Please try again
                        later, or{' '}
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://vercel.com/templates/next.js/gemini-ai-chatbot"
                        >
                          deploy your own version
                        </a>
                        .
                      </div>
                    )
                  }
                }}
              >
                <div className="size-12 rounded-full bg-zinc-100 flex justify-center items-center mb-2">
                  {example.icon}
                </div>
                <div className="font-medium mb-2">{example.heading}</div>
                <div className="text-sm text-zinc-800">
                  {example.subheading}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
}